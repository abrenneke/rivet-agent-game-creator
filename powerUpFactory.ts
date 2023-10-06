import Paddle from './paddle';
import { PowerUpEffect, PowerUpEffectInterface } from './powerUp';

export default class PowerUpFactory {
    static createPowerUp(paddle: Paddle): PowerUpEffectInterface {
        const powerUpEffects = Object.values(PowerUpEffect);
        const randomEffect = powerUpEffects[Math.floor(Math.random() * powerUpEffects.length)];

        return {
            x: paddle.x + paddle.width / 2,
            y: paddle.y,
            radius: 5,
            effect: randomEffect
        };
    }
}
