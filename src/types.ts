import { Vector3 } from 'three';

export type GameState = 'START' | 'PLAYING' | 'GAMEOVER' | 'VICTORY';

export interface HeroStats {
  health: number;
  maxHealth: number;
  potions: number;
  enemiesDefeated: number;
  activeWeapon: string;
}

export type EnemyType = 'GARGOYLE' | 'SHADOW_HOUND' | 'STONE_GOLEM';

export interface EnemyState {
  id: string;
  type: EnemyType;
  position: Vector3;
  initialPosition: Vector3;
  health: number;
  maxHealth: number;
  isDead: boolean;
  isAggro: boolean;
  speed: number;
  patrolWaypoints?: Vector3[];
  currentWaypointIndex?: number;
  size: number;
  heading: number;
}

export type TrapType = 'PENDULUM' | 'PRESSURE_PLATE';

export interface TrapState {
  id: string;
  type: TrapType;
  position: Vector3;
  isMoving?: boolean;
  swingAngle?: number;
  swingSpeed?: number;
  isTriggered?: boolean;
  arrowActive?: boolean;
  arrowPosition?: Vector3;
  arrowDirection?: Vector3;
  pressureDepressed?: boolean;
}

export interface SoundType {
  pitch: number;
  duration: number;
  type: OscillatorType;
}
