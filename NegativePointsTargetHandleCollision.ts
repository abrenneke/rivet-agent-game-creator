import { PowerUpEffectInterface, applyPowerUp } from './PowerUpEffect';
import Ball from './ball';
import Paddle from './paddle';
import NegativePointsTarget from './NegativePointsTarget';

export default function handleCollision(instance: NegativePointsTarget, paddle: Paddle, ball: Ball): void {
    // Check if the collision is with the paddle
    if (paddle.isColliding(instance)) {
        // Apply the power-up effect to the paddle
        applyPowerUp(instance.powerUpEffect, paddle);
    } else {
        // Emit an event when a collision occurs
        const event = new CustomEvent('negativePointsCollision', { detail: { points: -10 } });
        window.dispatchEvent(event);

        // Only apply the power-up effect to the ball if the collision was not with the paddle
        if (!paddle.isColliding(instance)) {
            applyPowerUp(instance.powerUpEffect, paddle, ball);
        }
    }
}
