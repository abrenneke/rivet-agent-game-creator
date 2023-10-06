import Paddle from './paddle';
import { PowerUpEffectInterface, PowerUpEffect, applyPowerUp } from './PowerUpEffect';

export default class PaddlePowerUpMechanics {
    private activePowerUps: PowerUpEffectInterface[] = [];
    private effectHandlers = {
        [PowerUpEffect.DOUBLE_PADDLE_WIDTH]: (paddle: Paddle) => paddle.width *= 2,
        [PowerUpEffect.HALF_PADDLE_WIDTH]: (paddle: Paddle) => paddle.width /= 2
    };

    applyPowerUpToPaddle(paddle: Paddle, powerUp: PowerUpEffectInterface) {
        if (this.effectHandlers[powerUp.effect]) {
            this.activePowerUps.push(powerUp);
            applyPowerUp(powerUp, paddle);
        }
    }

    updatePaddle(paddle: Paddle) {
        this.activePowerUps.forEach(powerUp => {
            const handleEffect = this.effectHandlers[powerUp.effect];
            if (handleEffect) {
                handleEffect(paddle);
            }
        });
    }
}
