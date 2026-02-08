import type { DinoDrawConfig } from "./types";

// Canvas dimensions
export const CANVAS_WIDTH = 800;
export const CANVAS_HEIGHT = 250;
export const GROUND_Y = 200;

// Physics
export const GRAVITY = 0.5;
export const JUMP_FORCE = -10.5;

// Game speed
export const GAME_SPEED_INITIAL = 3.5;
export const GAME_SPEED_INCREMENT = 0.0005;
export const GAME_SPEED_MAX = 7;

// Rendering
export const PIXEL_SIZE = 2;
export const COLOR_PRIMARY = "#535353";

// Obstacle spawning
export const MIN_OBSTACLE_GAP = 300;
export const OBSTACLE_SPAWN_INTERVAL_BASE = 100;
export const OBSTACLE_SPAWN_INTERVAL_MIN = 50;
export const OBSTACLE_SPAWN_INTERVAL_DIVISOR = 8;
export const BIRD_SPAWN_SCORE_THRESHOLD = 30;

// Hitbox insets (for more forgiving collision detection)
export const HITBOX_INSET_X = 3 * PIXEL_SIZE;
export const HITBOX_INSET_Y = 2 * PIXEL_SIZE;
export const HITBOX_WIDTH_REDUCTION = 6 * PIXEL_SIZE;
export const HITBOX_HEIGHT_REDUCTION = 3 * PIXEL_SIZE;
export const OBSTACLE_HITBOX_INSET_X = 2;
export const OBSTACLE_HITBOX_INSET_Y = 2;

// Animation timing
export const LEG_ANIMATION_FRAME_INTERVAL = 16;
export const LEG_ANIMATION_HALF_INTERVAL = 8;
export const BIRD_WING_ANIMATION_INTERVAL = 24;
export const BIRD_WING_ANIMATION_HALF_INTERVAL = 12;

// Dino position
export const DINO_X = 30;

// Bird positioning
export const BIRD_LOW_OFFSET = 5;
export const BIRD_HIGH_OFFSET = 8;

// Gap multipliers for obstacle sequencing
export const GAP_MULTIPLIER_AFTER_CACTUS = 1.5;
export const GAP_MULTIPLIER_AFTER_HIGH_BIRD = 1.5;
export const GAP_MULTIPLIER_SAFE_BIRD_SPAWN = 1.8;

// ============================================================================
// SPRITE DATA
// ============================================================================

// T-Rex standing sprite — big forward head, tiny arms, tapering tail
export const DINO_SPRITE = [
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
];

export const LEGS_LEFT = [
  [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
];

export const LEGS_RIGHT = [
  [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
];

// T-Rex ducking sprite — head forward, body flat and wide
export const DINO_DUCK_SPRITE = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
];

export const DUCK_LEGS_LEFT = [
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

export const DUCK_LEGS_RIGHT = [
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

export const CACTUS_SPRITE = [
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 1, 1, 1],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
];

// Pterodactyl sprites (two frames for wing flap)
export const BIRD_SPRITE_UP = [
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 0],
];

export const BIRD_SPRITE_DOWN = [
  [0, 0, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0],
];

// ============================================================================
// COMPUTED CONSTANTS
// ============================================================================

export const DINO_H_STAND = (DINO_SPRITE.length + 2) * PIXEL_SIZE;
export const DINO_H_DUCK = (DINO_DUCK_SPRITE.length + 2) * PIXEL_SIZE;
export const DINO_W_STAND = 15 * PIXEL_SIZE;
export const DINO_W_DUCK = 21 * PIXEL_SIZE;

export const DINO_CONFIGS: Record<"standing" | "ducking", DinoDrawConfig> = {
  standing: {
    bodySprite: DINO_SPRITE,
    legsLeft: LEGS_LEFT,
    legsRight: LEGS_RIGHT,
    height: DINO_H_STAND,
    width: DINO_W_STAND,
  },
  ducking: {
    bodySprite: DINO_DUCK_SPRITE,
    legsLeft: DUCK_LEGS_LEFT,
    legsRight: DUCK_LEGS_RIGHT,
    height: DINO_H_DUCK,
    width: DINO_W_DUCK,
  },
};
