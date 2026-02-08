export type ObstacleType = "cactus" | "bird";

export interface Obstacle {
  x: number;
  width: number;
  height: number;
  type: ObstacleType;
  y: number; // top of hitbox (y position for birds, GROUND_Y - height for cactus)
  scale: number;
}

export interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface GameState {
  dinoY: number;
  dinoVelocity: number;
  isJumping: boolean;
  isDucking: boolean;
  obstacles: Obstacle[];
  frameCount: number;
  speed: number;
  score: number;
  gameOver: boolean;
  started: boolean;
}

export interface DinoDrawConfig {
  bodySprite: number[][];
  legsLeft: number[][];
  legsRight: number[][];
  height: number;
  width: number;
}
