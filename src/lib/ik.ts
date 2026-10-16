/**
 * Planar arm kinematics in SVG coordinates (x right, y down).
 * `theta1` is the absolute angle of the first link; `theta2` and `theta3`
 * are relative to the previous link. Angles are in radians.
 */

export interface Point {
  x: number;
  y: number;
}

export interface ArmGeometry {
  base: Point;
  l1: number;
  l2: number;
  /** Wrist / gripper offset beyond the elbow link. */
  l3: number;
}

export interface Pose {
  theta1: number;
  theta2: number;
  theta3: number;
}

/** +1 bends the elbow clockwise on screen, -1 counter-clockwise. */
export type Elbow = 1 | -1;

const TAU = Math.PI * 2;

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/**
 * Analytic two-link inverse kinematics for the shoulder–elbow segment.
 * Targets outside the workspace are clamped to the reachable annulus.
 */
export function solveIK2(target: Point, arm: Pick<ArmGeometry, 'base' | 'l1' | 'l2'>, elbow: Elbow, maxReach = 0.97): Omit<Pose, 'theta3'> {
  const dx = target.x - arm.base.x;
  const dy = target.y - arm.base.y;
  const min = Math.abs(arm.l1 - arm.l2) + 1e-3;
  const max = (arm.l1 + arm.l2) * maxReach;
  const d = clamp(Math.hypot(dx, dy), min, max);

  const cos2 = clamp((d * d - arm.l1 * arm.l1 - arm.l2 * arm.l2) / (2 * arm.l1 * arm.l2), -1, 1);
  const theta2 = elbow * Math.acos(cos2);
  const theta1 = Math.atan2(dy, dx) - Math.atan2(arm.l2 * Math.sin(theta2), arm.l1 + arm.l2 * Math.cos(theta2));
  return { theta1: wrap(theta1), theta2 };
}

/** Inside this distance from the shoulder, keep the previous heading so the wrist does not flip. */
export const HEADING_DEADZONE = 28;

/**
 * Three-link IK. The target is projected onto the reachable arc first, then the
 * wrist is backed off by `l3` along that same heading so the gripper and the
 * arm agree at full stretch. Near the shoulder, `prevHeading` is kept.
 */
export function solveIK(target: Point, arm: ArmGeometry, elbow: Elbow, prevHeading = 0, maxReach = 0.97): Pose {
  const dx = target.x - arm.base.x;
  const dy = target.y - arm.base.y;
  const dist = Math.hypot(dx, dy);
  const heading = dist < HEADING_DEADZONE ? prevHeading : Math.atan2(dy, dx);
  const max = (arm.l1 + arm.l2 + arm.l3) * maxReach;
  const min = Math.abs(arm.l1 - arm.l2) + arm.l3 * 0.35;
  const d = clamp(dist < 1e-4 ? min : dist, min, max);
  const tip = {
    x: arm.base.x + Math.cos(heading) * d,
    y: arm.base.y + Math.sin(heading) * d,
  };
  const wrist = {
    x: tip.x - arm.l3 * Math.cos(heading),
    y: tip.y - arm.l3 * Math.sin(heading),
  };
  const { theta1, theta2 } = solveIK2(wrist, arm, elbow, maxReach);
  const theta3 = wrap(heading - (theta1 + theta2));
  return { theta1, theta2, theta3 };
}

/** @deprecated Use solveIK; kept name alias for clarity at call sites. */
export const solveIK3 = solveIK;

export function forwardKinematics(
  pose: Pose,
  arm: ArmGeometry,
): { elbow: Point; wrist: Point; tip: Point; tipAngle: number } {
  const elbow = {
    x: arm.base.x + arm.l1 * Math.cos(pose.theta1),
    y: arm.base.y + arm.l1 * Math.sin(pose.theta1),
  };
  const mid = pose.theta1 + pose.theta2;
  const wrist = {
    x: elbow.x + arm.l2 * Math.cos(mid),
    y: elbow.y + arm.l2 * Math.sin(mid),
  };
  const tipAngle = mid + pose.theta3;
  const tip = {
    x: wrist.x + arm.l3 * Math.cos(tipAngle),
    y: wrist.y + arm.l3 * Math.sin(tipAngle),
  };
  return { elbow, wrist, tip, tipAngle };
}

/**
 * Picks the elbow configuration with a wide hysteresis band so the wrist
 * absorbs heading changes instead of flipping the elbow.
 */
export function chooseElbow(target: Point, arm: ArmGeometry, current: Elbow, band = 48): Elbow {
  const dx = target.x - arm.base.x;
  if (dx > band) return 1;
  if (dx < -band) return -1;
  return current;
}

/** Wraps an angle to (-π, π]. */
export function wrap(a: number): number {
  const r = ((((a + Math.PI) % TAU) + TAU) % TAU) - Math.PI;
  return r === -Math.PI ? Math.PI : r;
}

/** Signed shortest difference `to - from`, in (-π, π]. */
export function angleDelta(from: number, to: number): number {
  return wrap(to - from);
}

/**
 * Frame-rate independent exponential approach toward `goal` along the
 * shortest arc. `k` is the convergence rate per second.
 */
export function approachAngle(current: number, goal: number, dt: number, k = 12): number {
  const t = 1 - Math.exp(-k * dt);
  return wrap(current + angleDelta(current, goal) * t);
}
