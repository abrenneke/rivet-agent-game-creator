import { PowerUpEffectInterface, applyPowerUp } from './PowerUpEffect';
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

    handleCollision(paddle: Paddle): void {
        // Emit an event when a collision occurs
        const event = new CustomEvent('negativePointsCollision', { detail: { points: -10 } });
        window.dispatchEvent(event);

        // Apply the power-up effect
        applyPowerUp(this.powerUpEffect, paddle);
    }
}
