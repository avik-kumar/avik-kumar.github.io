/**
 * Planar two-link arm kinematics in SVG coordinates (x right, y down).
 * `theta1` is the absolute angle of the first link; `theta2` is the elbow
 * angle relative to the first link. Angles are in radians.
 */

export interface Point {
  x: number;
  y: number;
}

export interface ArmGeometry {
  base: Point;
  l1: number;
  l2: number;
}

export interface Pose {
  theta1: number;
  theta2: number;
}

/** +1 bends the elbow clockwise on screen, -1 counter-clockwise. */
export type Elbow = 1 | -1;

const TAU = Math.PI * 2;

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/**
 * Analytic inverse kinematics. Targets outside the workspace are clamped to
 * the reachable annulus, so the arm points toward far-away targets instead of
 * failing. `maxReach` < 1 keeps a slight bend at full extension.
 */
export function solveIK(target: Point, arm: ArmGeometry, elbow: Elbow, maxReach = 0.97): Pose {
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

export function forwardKinematics(pose: Pose, arm: ArmGeometry): { elbow: Point; tip: Point; tipAngle: number } {
  const elbow = {
    x: arm.base.x + arm.l1 * Math.cos(pose.theta1),
    y: arm.base.y + arm.l1 * Math.sin(pose.theta1),
  };
  const tipAngle = pose.theta1 + pose.theta2;
  const tip = {
    x: elbow.x + arm.l2 * Math.cos(tipAngle),
    y: elbow.y + arm.l2 * Math.sin(tipAngle),
  };
  return { elbow, tip, tipAngle };
}

/**
 * Picks the elbow configuration that keeps the elbow above the arm, with a
 * hysteresis band around vertical so it doesn't flicker when the target sits
 * directly above the base.
 */
export function chooseElbow(target: Point, arm: ArmGeometry, current: Elbow, band = 16): Elbow {
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
