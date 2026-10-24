import type { CreatureState } from "../game/creature";

const PIXEL_SIZE = 16;
const SPRITE = [
  "...##....##...",
  "..#BB#..#BB#..",
  ".#BBBB##BBBB#.",
  "#BBBBBBBBBBBB#",
  "#BBBBBBBBBBBB#",
  "#BBBEEBBBBEEB#",
  "#BBBEEBBBBEEB#",
  "#BBBBBBBBBBBB#",
  "#BBBB#MM#BBBB#",
  ".#BBB#MM#BBB#.",
  "..#BBBBBBBB#..",
  "...#BBBBBB#...",
  "....######....",
  ".....####.....",
];

const COLORS: Record<string, string> = {
  "#": "#25223a",
  B: "#f2a65a",
  E: "#25223a",
  M: "#9b4652",
};

export function drawCreature(
  context: CanvasRenderingContext2D,
  state: CreatureState,
): void {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  const spriteWidth = Math.max(...SPRITE.map((row) => row.length));
  const originX = Math.floor(
    (context.canvas.width - spriteWidth * PIXEL_SIZE) / 2,
  );
  const originY = Math.floor(
    (context.canvas.height - SPRITE.length * PIXEL_SIZE) / 2,
  );

  SPRITE.forEach((row, y) => {
    [...row].forEach((pixel, x) => {
      if (pixel === ".") {
        return;
      }

      context.fillStyle =
        pixel === "B" && state.happiness < 30 ? "#a9a0c4" : COLORS[pixel];
      context.fillRect(
        originX + x * PIXEL_SIZE,
        originY + y * PIXEL_SIZE,
        PIXEL_SIZE,
        PIXEL_SIZE,
      );
    });
  });
}
