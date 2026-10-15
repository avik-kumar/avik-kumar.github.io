import { forwardKinematics, solveIK, type ArmGeometry, type Elbow, type Point, type Pose } from './ik';

/** Shared by the build-time render and the client script so both draw the same arm. */
export const VIEW = { x: 0, y: 50, width: 360, height: 222 };
export const ARM: ArmGeometry = { base: { x: 180, y: 236 }, l1: 88, l2: 68, l3: 28 };
export const GROUND_Y = 250;
export const REACH = (ARM.l1 + ARM.l2 + ARM.l3) * 0.97;
export const REST_TARGET: Point = { x: 250, y: 118 };
export const REST_ELBOW: Elbow = 1;
export const JAW_OPEN = 5;
export const JAW_CLOSED = 1.4;

export const BOX_SIZE = 14;
export const BOX_HALF = BOX_SIZE / 2;
/** Initial box resting on the ground, to the right of the pedestal. */
export const BOX_REST: Point = { x: 268, y: GROUND_Y - BOX_HALF };
export const BOX_GRASP_RADIUS = 22;
export const BOX_G = 520;
export const BOX_FRICTION = 4;
export const BOX_BOUNCE = 0.18;

/** Waypoints for the idle cycle on touch devices. */
export const IDLE_WAYPOINTS: Point[] = [
  { x: 250, y: 118 },
  { x: 120, y: 92 },
  { x: 214, y: 70 },
  { x: 82, y: 170 },
  { x: 286, y: 178 },
];

/** Keeps targets above the base so the arm never reaches into the ground. */
export function constrainTarget(p: Point): Point {
  return { x: p.x, y: Math.min(p.y, ARM.base.y - 14) };
}

export function isInView(p: Point): boolean {
  return p.x >= VIEW.x && p.x <= VIEW.x + VIEW.width && p.y >= VIEW.y && p.y <= GROUND_Y;
}

export function restPose(): Pose {
  return solveIK(REST_TARGET, ARM, REST_ELBOW);
}

const deg = (r: number) => (r * 180) / Math.PI;
const n = (v: number) => Math.round(v * 100) / 100;
const signed = (v: number) => `${v < 0 ? '−' : ''}${Math.abs(v).toFixed(1)}`;

export interface ArmFrame {
  link1: string;
  link2: string;
  link3: string;
  arc1: string;
  arc2: string;
  label1: Point;
  label2: Point;
  readout: string;
}

/** SVG attribute values for a pose. Displayed angles use the math convention (counter-clockwise positive). */
export function armFrame(pose: Pose): ArmFrame {
  const { base, l1, l2 } = ARM;
  const { elbow } = forwardKinematics(pose, ARM);
  const { theta1, theta2, theta3 } = pose;

  const r1 = 30;
  const arc1 =
    `M${n(base.x + r1)} ${n(base.y)} ` +
    `A${r1} ${r1} 0 0 ${theta1 < 0 ? 0 : 1} ${n(base.x + r1 * Math.cos(theta1))} ${n(base.y + r1 * Math.sin(theta1))}`;

  const r2 = 20;
  const end2 = theta1 + theta2;
  const arc2 =
    `M${n(elbow.x + r2 * Math.cos(theta1))} ${n(elbow.y + r2 * Math.sin(theta1))} ` +
    `A${r2} ${r2} 0 0 ${theta2 < 0 ? 0 : 1} ${n(elbow.x + r2 * Math.cos(end2))} ${n(elbow.y + r2 * Math.sin(end2))}`;

  const mid1 = theta1 / 2;
  const mid2 = theta1 + theta2 / 2;

  return {
    link1: `translate(${base.x} ${base.y}) rotate(${n(deg(theta1))})`,
    link2: `translate(${l1} 0) rotate(${n(deg(theta2))})`,
    link3: `translate(${l2} 0) rotate(${n(deg(theta3))})`,
    arc1,
    arc2,
    label1: { x: n(base.x + 46 * Math.cos(mid1)), y: n(base.y + 46 * Math.sin(mid1)) },
    label2: { x: n(elbow.x + 34 * Math.cos(mid2)), y: n(elbow.y + 34 * Math.sin(mid2)) },
    readout: `θ₁ ${signed(-deg(theta1))}° · θ₂ ${signed(-deg(theta2))}° · θ₃ ${signed(-deg(theta3))}°`,
  };
}

export const jawTransform = (gap: number, side: 1 | -1) => `translate(0 ${n(side * gap)})`;

export function tipOf(pose: Pose): Point {
  return forwardKinematics(pose, ARM).tip;
}

export function boxNearTip(box: Point, tip: Point, radius = BOX_GRASP_RADIUS): boolean {
  return Math.hypot(box.x - tip.x, box.y - tip.y) <= radius;
}
