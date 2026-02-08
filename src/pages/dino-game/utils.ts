import type { Box, GameState, Obstacle, ObstacleType } from "./types";
import {
  BIRD_HIGH_OFFSET,
  BIRD_LOW_OFFSET,
  BIRD_SPAWN_SCORE_THRESHOLD,
  CACTUS_SPRITE,
  CANVAS_WIDTH,
  DINO_CONFIGS,
  DINO_H_STAND,
  DINO_X,
  GAP_MULTIPLIER_AFTER_CACTUS,
  GAP_MULTIPLIER_AFTER_HIGH_BIRD,
  GAP_MULTIPLIER_SAFE_BIRD_SPAWN,
  GROUND_Y,
  HITBOX_HEIGHT_REDUCTION,
  HITBOX_INSET_X,
  HITBOX_INSET_Y,
  HITBOX_WIDTH_REDUCTION,
  MIN_OBSTACLE_GAP,
  OBSTACLE_HITBOX_INSET_X,
  OBSTACLE_HITBOX_INSET_Y,
  OBSTACLE_SPAWN_INTERVAL_BASE,
  OBSTACLE_SPAWN_INTERVAL_DIVISOR,
  OBSTACLE_SPAWN_INTERVAL_MIN,
} from "./constants";

/**
 * Check if two axis-aligned bounding boxes collide
 */
export const checkAABBCollision = (a: Box, b: Box): boolean => {
  return (
    a.x < b.x + b.w &&
    a.x + a.w > b.x &&
    a.y < b.y + b.h &&
    a.y + a.h > b.y
  );
};

/**
 * Find the rightmost x position among all obstacles
 */
export const getRightmostObstacleX = (obstacles: Obstacle[]): number => {
  let rightmostX = 0;
  for (const obs of obstacles) {
    const obstacleRight = obs.x + obs.width;
    if (obstacleRight > rightmostX) {
      rightmostX = obstacleRight;
    }
  }
  return rightmostX;
};

/**
 * Calculate required gap between obstacles based on game speed
 */
export const calculateObstacleGap = (speed: number): number => {
  return MIN_OBSTACLE_GAP + speed * 15;
};

/**
 * Check if we can spawn a new obstacle
 */
export const canSpawnObstacle = (state: GameState): boolean => {
  const rightmostX = getRightmostObstacleX(state.obstacles);
  const gap = calculateObstacleGap(state.speed);
  return rightmostX <= CANVAS_WIDTH - gap;
};

/**
 * Determine if last obstacle was a high-flying bird
 */
export const isHighBird = (obstacle: Obstacle | null): boolean => {
  return obstacle?.type === "bird" && obstacle.y < GROUND_Y - 60;
};

/**
 * Select obstacle type based on score and last obstacle
 */
export const selectObstacleType = (
  state: GameState,
  lastObstacle: Obstacle | null,
  gap: number,
): ObstacleType => {
  const rightmostX = getRightmostObstacleX(state.obstacles);

  // Birds only appear after score threshold
  if (state.score <= BIRD_SPAWN_SCORE_THRESHOLD) {
    return "cactus";
  }

  const lastType = lastObstacle?.type;
  const lastIsHighBird = isHighBird(lastObstacle);

  // Avoid challenging combos:
  // - Don't spawn high bird right after cactus (would need jump → duck)
  // - Don't spawn cactus right after high bird (would need duck → jump)

  if (lastType === "cactus" && rightmostX > CANVAS_WIDTH - gap * GAP_MULTIPLIER_AFTER_CACTUS) {
    // Too close after a cactus — only spawn low bird or another cactus
    return Math.random() > 0.6 ? "bird" : "cactus";
  }

  if (lastIsHighBird && rightmostX > CANVAS_WIDTH - gap * GAP_MULTIPLIER_AFTER_HIGH_BIRD) {
    return "cactus"; // Safe: cactus after high bird with enough gap
  }

  return Math.random() > 0.65 ? "bird" : "cactus";
};

/**
 * Create a cactus obstacle
 */
export const createCactus = (): Obstacle => {
  const scale = Math.random() > 0.5 ? 4 : 3;
  const spriteH = CACTUS_SPRITE.length * scale;

  return {
    x: CANVAS_WIDTH,
    width: 5 * scale,
    height: spriteH,
    type: "cactus",
    y: GROUND_Y - spriteH,
    scale,
  };
};

/**
 * Create a bird obstacle
 */
export const createBird = (lastObstacle: Obstacle | null, gap: number): Obstacle => {
  const scale = 3;
  const birdW = 7 * scale;
  const birdH = 6 * scale;

  const rightmostX = lastObstacle ? lastObstacle.x + lastObstacle.width : 0;

  // Two bird heights:
  // - Low bird (ground level) — jump over it
  // - High bird (head height) — duck under it
  let birdY: number;

  if (
    lastObstacle?.type === "cactus" &&
    rightmostX > CANVAS_WIDTH - gap * GAP_MULTIPLIER_SAFE_BIRD_SPAWN
  ) {
    // After a cactus, only spawn low birds (jumpable) to keep it fair
    birdY = GROUND_Y - birdH - BIRD_LOW_OFFSET;
  } else {
    birdY =
      Math.random() > 0.5
        ? GROUND_Y - birdH - BIRD_LOW_OFFSET // Low — jump over
        : GROUND_Y - DINO_H_STAND - BIRD_HIGH_OFFSET; // High — duck under
  }

  return {
    x: CANVAS_WIDTH,
    width: birdW,
    height: birdH,
    type: "bird",
    y: birdY,
    scale,
  };
};

/**
 * Create dino hitbox based on current state
 */
export const createDinoHitbox = (state: GameState): Box => {
  const isDucking = state.isDucking && !state.isJumping;
  const config = isDucking ? DINO_CONFIGS.ducking : DINO_CONFIGS.standing;

  return {
    x: DINO_X + HITBOX_INSET_X,
    y: state.dinoY - config.height + HITBOX_INSET_Y,
    w: config.width - HITBOX_WIDTH_REDUCTION,
    h: config.height - HITBOX_HEIGHT_REDUCTION,
  };
};

/**
 * Create obstacle hitbox
 */
export const createObstacleHitbox = (obstacle: Obstacle): Box => {
  return {
    x: obstacle.x + OBSTACLE_HITBOX_INSET_X,
    y: obstacle.y,
    w: obstacle.width - OBSTACLE_HITBOX_INSET_X * 2,
    h: obstacle.height - OBSTACLE_HITBOX_INSET_Y,
  };
};

/**
 * Calculate spawn interval based on score
 */
export const calculateSpawnInterval = (score: number): number => {
  return Math.max(
    OBSTACLE_SPAWN_INTERVAL_MIN,
    OBSTACLE_SPAWN_INTERVAL_BASE - Math.floor(score / OBSTACLE_SPAWN_INTERVAL_DIVISOR),
  );
};

/**
 * Format score with leading zeros
 */
export const formatScore = (score: number): string => {
  return String(Math.floor(score)).padStart(5, "0");
};
