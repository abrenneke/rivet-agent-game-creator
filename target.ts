import { canvas } from './gameState';
import Score from './score';
import Ball from './ball';

let score: Score = new Score();

class Target {
    x: number;
    y: number;
    width: number;
    height: number;
    powerUp: boolean;
    active: boolean;

    constructor(x: number, y: number, width: number, height: number, powerUp: boolean) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.powerUp = powerUp;
        this.active = true;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        if (this.active) {
            ctx.fillStyle = '#000000';
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    update(): void {
        // Update target state
    }

    intersects(ball: Ball): boolean {
        // Collision detection logic
        return false;
    }

    handleCollision(): void {
        this.active = false;
        this.onHit();
        score.update();
    }

    onHit(): void {
        score.increment(1);
    }
}

export default Target;
