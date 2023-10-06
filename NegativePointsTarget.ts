import { PowerUpEffectInterface, applyPowerUp } from './PowerUpEffect';
import Ball from './ball';
import Paddle from './paddle';

export default class NegativePointsTarget {
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
            effect: 'NEGATIVE_POINTS'
        };
    }

    handleCollision(paddle: Paddle, ball: Ball): void {
        // Check if the collision is with the paddle
        if (paddle.isColliding(this)) {
            // Apply the power-up effect to the paddle
            applyPowerUp(this.powerUpEffect, paddle);
        } else {
            // Emit an event when a collision occurs
            const event = new CustomEvent('negativePointsCollision', { detail: { points: -10 } });
            window.dispatchEvent(event);

            // Apply the power-up effect to the ball
            applyPowerUp(this.powerUpEffect, paddle, ball);
        }
    }
}
