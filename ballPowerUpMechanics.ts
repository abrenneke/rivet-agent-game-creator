import Ball from './ball';
import Paddle from './paddle';
import { PowerUpEffectInterface, PowerUpEffect, applyPowerUp } from './powerUp';

export default class BallPowerUpMechanics {
    private activePowerUps: PowerUpEffectInterface[] = [];
    private effectHandlers = {
        [PowerUpEffect.DOUBLE_BALL_SPEED]: (ball: Ball) => ball.dy *= 2,
        [PowerUpEffect.HALF_BALL_SPEED]: (ball: Ball) => ball.dy /= 2
    };

    applyPowerUpToBall(paddle: Paddle, powerUp: PowerUpEffectInterface) {
        if (this.effectHandlers[powerUp.effect]) {
            this.activePowerUps.push(powerUp);
            applyPowerUp(powerUp, paddle);
        }
    }

    updateBall(ball: Ball) {
        this.activePowerUps.forEach(powerUp => {
            const handleEffect = this.effectHandlers[powerUp.effect];
            if (handleEffect) {
                handleEffect(ball);
            }
        });
    }
}
