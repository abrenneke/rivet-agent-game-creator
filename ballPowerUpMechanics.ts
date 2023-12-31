import Ball from './ball';
import { PowerUpEffectInterface, PowerUpEffect, applyPowerUp } from './PowerUpEffect';

export default class BallPowerUpMechanics {
    private activePowerUps: PowerUpEffectInterface[] = [];
    private effectHandlers = {
        [PowerUpEffect.DOUBLE_BALL_SPEED]: (ball: Ball) => ball.dy *= 2,
        [PowerUpEffect.HALF_BALL_SPEED]: (ball: Ball) => ball.dy /= 2
    };

    applyPowerUpToBall(ball: Ball, powerUp: PowerUpEffectInterface) {
        if (this.effectHandlers[powerUp.effect]) {
            this.activePowerUps.push(powerUp);
            applyPowerUp(powerUp, undefined, ball);
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
