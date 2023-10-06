import { PowerUpEffectInterface, applyPowerUp } from './PowerUpEffect';
import Ball from './ball';
import Paddle from './paddle';

export default class ExtraPointsTarget {
    powerUpEffect: PowerUpEffectInterface;

    get radius(): number {
        return this.powerUpEffect.radius;
    }

    get effect(): string {
        return this.powerUpEffect.effect;
    }

    constructor(public x: number, public y: number, public width: number, public height: number, public color: string) {
        this.powerUpEffect = {
            x: x,
            y: y,
            radius: Math.min(width, height) / 2,
            effect: 'EXTRA_POINTS'
        };
    }

    handleCollision(paddle: Paddle, ball: Ball): void {
        // Check if the collision is with the paddle
        if (paddle.isColliding(this)) {
            // Apply the power-up effect to the paddle
            applyPowerUp(this.powerUpEffect, paddle);
        } else {
            // Emit an event when a collision occurs
            const event = new CustomEvent('extraPointsCollision', { detail: { points: 10 } });
            window.dispatchEvent(event);

            // Apply the power-up effect to the ball
            applyPowerUp(this.powerUpEffect, paddle, ball);
        }
    }

    update(canvasWidth: number, canvasHeight: number) {
        this.y += 1;

        if (this.y > canvasHeight) {
            this.y = 0;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
