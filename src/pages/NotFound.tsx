import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

import type { GameState } from "./dino-game/types";
import {
  BIRD_SPRITE_DOWN,
  BIRD_SPRITE_UP,
  BIRD_WING_ANIMATION_HALF_INTERVAL,
  BIRD_WING_ANIMATION_INTERVAL,
  CACTUS_SPRITE,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  COLOR_PRIMARY,
  DINO_CONFIGS,
  DINO_X,
  GAME_SPEED_INITIAL,
  GAME_SPEED_INCREMENT,
  GAME_SPEED_MAX,
  GRAVITY,
  GROUND_Y,
  JUMP_FORCE,
  LEG_ANIMATION_FRAME_INTERVAL,
  LEG_ANIMATION_HALF_INTERVAL,
  PIXEL_SIZE,
} from "./dino-game/constants";
import {
  calculateObstacleGap,
  calculateSpawnInterval,
  canSpawnObstacle,
  checkAABBCollision,
  createBird,
  createCactus,
  createDinoHitbox,
  createObstacleHitbox,
  formatScore,
  selectObstacleType,
} from "./dino-game/utils";

const NotFound = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameLoopRef = useRef<number>(0);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const stateRef = useRef<GameState>({
    dinoY: GROUND_Y,
    dinoVelocity: 0,
    isJumping: false,
    isDucking: false,
    obstacles: [],
    frameCount: 0,
    speed: GAME_SPEED_INITIAL,
    score: 0,
    gameOver: false,
    started: false,
  });

  const drawSprite = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      sprite: number[][],
      ox: number,
      oy: number,
      color: string,
      scale = PIXEL_SIZE,
    ): void => {
      ctx.fillStyle = color;
      for (let row = 0; row < sprite.length; row++) {
        for (let col = 0; col < sprite[row].length; col++) {
          if (sprite[row][col]) {
            ctx.fillRect(ox + col * scale, oy + row * scale, scale, scale);
          }
        }
      }
    },
    [],
  );

  const drawDino = useCallback(
    (ctx: CanvasRenderingContext2D, y: number): void => {
      const s = stateRef.current;
      const config =
        s.isDucking && !s.isJumping ? DINO_CONFIGS.ducking : DINO_CONFIGS.standing;

      const oy = y - config.height;
      drawSprite(ctx, config.bodySprite, DINO_X, oy, COLOR_PRIMARY);

      // Leg animation
      const isLeftLeg = s.frameCount % LEG_ANIMATION_FRAME_INTERVAL < LEG_ANIMATION_HALF_INTERVAL;
      const legs = isLeftLeg ? config.legsLeft : config.legsRight;
      const legsY = oy + config.bodySprite.length * PIXEL_SIZE;

      if (s.isJumping || !s.started) {
        drawSprite(ctx, config.legsLeft, DINO_X, legsY, COLOR_PRIMARY);
      } else {
        drawSprite(ctx, legs, DINO_X, legsY, COLOR_PRIMARY);
      }
    },
    [drawSprite],
  );

  const drawObstacle = useCallback(
    (ctx: CanvasRenderingContext2D, obs: { type: string; x: number; y: number; scale: number }): void => {
      if (obs.type === "cactus") {
        const spriteH = CACTUS_SPRITE.length * obs.scale;
        const oy = GROUND_Y - spriteH;
        drawSprite(ctx, CACTUS_SPRITE, obs.x, oy, COLOR_PRIMARY, obs.scale);
      } else {
        const s = stateRef.current;
        const isWingsUp =
          s.frameCount % BIRD_WING_ANIMATION_INTERVAL < BIRD_WING_ANIMATION_HALF_INTERVAL;
        const sprite = isWingsUp ? BIRD_SPRITE_UP : BIRD_SPRITE_DOWN;
        drawSprite(ctx, sprite, obs.x, obs.y, COLOR_PRIMARY, obs.scale);
      }
    },
    [drawSprite],
  );

  const drawGround = useCallback((ctx: CanvasRenderingContext2D): void => {
    const s = stateRef.current;

    ctx.strokeStyle = COLOR_PRIMARY;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, GROUND_Y + 1);
    ctx.lineTo(CANVAS_WIDTH, GROUND_Y + 1);
    ctx.stroke();

    ctx.fillStyle = COLOR_PRIMARY;
    for (let i = 0; i < 30; i++) {
      const dotX = ((i * 29 + s.frameCount * 2) % (CANVAS_WIDTH + 20)) - 10;
      ctx.fillRect(dotX, GROUND_Y + 5 + (i % 3) * 3, 2, 1);
    }
  }, []);

  const drawScore = useCallback((ctx: CanvasRenderingContext2D): void => {
    const s = stateRef.current;
    ctx.fillStyle = COLOR_PRIMARY;
    ctx.font = "16px monospace";
    ctx.textAlign = "right";
    ctx.fillText(formatScore(s.score), CANVAS_WIDTH - 20, 30);
  }, []);

  const drawScene = useCallback(
    (ctx: CanvasRenderingContext2D): void => {
      const s = stateRef.current;
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      drawGround(ctx);
      drawDino(ctx, s.dinoY);
      s.obstacles.forEach((obs) => drawObstacle(ctx, obs));
      drawScore(ctx);
    },
    [drawDino, drawObstacle, drawGround, drawScore],
  );

  const drawStartScreen = useCallback(
    (ctx: CanvasRenderingContext2D): void => {
      drawScene(ctx);
      ctx.fillStyle = COLOR_PRIMARY;
      ctx.font = "18px monospace";
      ctx.textAlign = "center";
      ctx.fillText("Press Space or Tap to start", CANVAS_WIDTH / 2, 80);
    },
    [drawScene],
  );

  const drawGameOver = useCallback(
    (ctx: CanvasRenderingContext2D): void => {
      const s = stateRef.current;
      drawScene(ctx);

      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      const boxW = 260;
      const boxH = 90;
      const boxX = (CANVAS_WIDTH - boxW) / 2;
      const boxY = 40;

      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.beginPath();
      ctx.roundRect(boxX, boxY, boxW, boxH, 8);
      ctx.fill();

      ctx.strokeStyle = "#d1d5db";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(boxX, boxY, boxW, boxH, 8);
      ctx.stroke();

      ctx.fillStyle = COLOR_PRIMARY;
      ctx.font = "bold 20px monospace";
      ctx.textAlign = "center";
      ctx.fillText("GAME OVER", CANVAS_WIDTH / 2, boxY + 30);

      ctx.font = "16px monospace";
      ctx.fillText(
        `Score: ${formatScore(s.score)}`,
        CANVAS_WIDTH / 2,
        boxY + 55,
      );

      ctx.font = "13px monospace";
      ctx.fillStyle = "#888";
      ctx.fillText(
        "Press Space or Tap to play again",
        CANVAS_WIDTH / 2,
        boxY + 78,
      );
    },
    [drawScene],
  );

  const spawnObstacle = useCallback((state: GameState): void => {
    if (!canSpawnObstacle(state)) return;

    const lastObstacle = state.obstacles.length > 0
      ? state.obstacles[state.obstacles.length - 1]
      : null;
    const gap = calculateObstacleGap(state.speed);
    const type = selectObstacleType(state, lastObstacle, gap);

    const obstacle = type === "cactus"
      ? createCactus()
      : createBird(lastObstacle, gap);

    state.obstacles.push(obstacle);
  }, []);

  const resetGame = useCallback((): void => {
    const s = stateRef.current;
    s.dinoY = GROUND_Y;
    s.dinoVelocity = 0;
    s.isJumping = false;
    s.isDucking = false;
    s.obstacles = [];
    s.frameCount = 0;
    s.speed = GAME_SPEED_INITIAL;
    s.score = 0;
    s.gameOver = false;
    s.started = true;

    setScore(0);
    setGameOver(false);
  }, []);

  const checkCollisions = useCallback((state: GameState): boolean => {
    const dinoBox = createDinoHitbox(state);

    for (const obs of state.obstacles) {
      const obsBox = createObstacleHitbox(obs);
      if (checkAABBCollision(dinoBox, obsBox)) {
        return true;
      }
    }

    return false;
  }, []);

  const updatePhysics = useCallback((state: GameState): void => {
    state.dinoVelocity += GRAVITY;
    state.dinoY += state.dinoVelocity;

    if (state.dinoY >= GROUND_Y) {
      state.dinoY = GROUND_Y;
      state.dinoVelocity = 0;
      state.isJumping = false;
    }
  }, []);

  const updateObstacles = useCallback((state: GameState): void => {
    state.obstacles = state.obstacles.filter((obs) => {
      obs.x -= state.speed;
      return obs.x > -50;
    });
  }, []);

  const updateGameSpeed = useCallback((state: GameState): void => {
    if (state.speed < GAME_SPEED_MAX) {
      state.speed += GAME_SPEED_INCREMENT;
    }
  }, []);

  const gameLoop = useCallback((): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const s = stateRef.current;

    if (!s.started) {
      drawStartScreen(ctx);
      return;
    }

    if (s.gameOver) {
      drawGameOver(ctx);
      return;
    }

    updatePhysics(s);

    s.frameCount++;
    const spawnInterval = calculateSpawnInterval(s.score);
    if (s.frameCount % spawnInterval === 0) {
      spawnObstacle(s);
    }

    updateObstacles(s);
    updateGameSpeed(s);

    s.score += 0.1;
    setScore(Math.floor(s.score));

    if (checkCollisions(s)) {
      s.gameOver = true;
      setGameOver(true);
      drawGameOver(ctx);
      return;
    }

    drawScene(ctx);
    gameLoopRef.current = requestAnimationFrame(gameLoop);
  }, [
    drawStartScreen,
    drawGameOver,
    drawScene,
    spawnObstacle,
    updatePhysics,
    updateObstacles,
    updateGameSpeed,
    checkCollisions,
  ]);

  const handleJump = useCallback((): void => {
    const s = stateRef.current;

    if (s.gameOver || !s.started) {
      resetGame();
      gameLoopRef.current = requestAnimationFrame(gameLoop);
      return;
    }

    if (!s.isJumping) {
      s.dinoVelocity = JUMP_FORCE;
      s.isJumping = true;
    }
  }, [resetGame, gameLoop]);

  const handleDuckStart = useCallback((): void => {
    stateRef.current.isDucking = true;
  }, []);

  const handleDuckEnd = useCallback((): void => {
    stateRef.current.isDucking = false;
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        handleJump();
      }
      if (e.code === "ArrowDown") {
        e.preventDefault();
        handleDuckStart();
      }
    };

    const handleKeyUp = (e: KeyboardEvent): void => {
      if (e.code === "ArrowDown") {
        handleDuckEnd();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        drawStartScreen(ctx);
      }
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      cancelAnimationFrame(gameLoopRef.current);
    };
  }, [handleJump, handleDuckStart, handleDuckEnd, drawStartScreen]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 pt-24 pb-16">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-2">
        404
      </h1>
      <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
        Page not found — but here's a game while you're here!
      </p>

      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 mb-4 max-w-full overflow-hidden">
        <div className="flex justify-between items-center mb-2 px-1">
          <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
            Score: {formatScore(score)}
          </span>
          {gameOver && (
            <span className="text-sm text-red-500 font-mono">Game Over!</span>
          )}
        </div>
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer max-w-full"
          style={{ imageRendering: "pixelated" }}
          onClick={handleJump}
          onTouchStart={(e) => {
            e.preventDefault();
            handleJump();
          }}
        />
      </div>

      <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
        Space / Up to jump · Down to duck · Tap to jump
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-lg hover:opacity-90 transition-opacity font-medium"
      >
        <Home size={18} />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
