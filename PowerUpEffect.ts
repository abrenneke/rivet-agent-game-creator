import Paddle from './paddle';

export type PowerUpEffectType = 'DOUBLE_PADDLE_WIDTH' | 'HALF_PADDLE_WIDTH' | 'DOUBLE_BALL_SPEED' | 'HALF_BALL_SPEED' | 'EXTRA_POINTS' | 'NEGATIVE_POINTS';

export interface PowerUpEffectInterface {
    x: number;
    y: number;
    radius: number;
    effect: PowerUpEffectType;
}

export const PowerUpEffect = {
    DOUBLE_PADDLE_WIDTH: 'DOUBLE_PADDLE_WIDTH',
    HALF_PADDLE_WIDTH: 'HALF_PADDLE_WIDTH',
    DOUBLE_BALL_SPEED: 'DOUBLE_BALL_SPEED',
    HALF_BALL_SPEED: 'HALF_BALL_SPEED',
    EXTRA_POINTS: 'EXTRA_POINTS',
    NEGATIVE_POINTS: 'NEGATIVE_POINTS',
};

export function applyPowerUp(powerUp: PowerUpEffectInterface, paddle: Paddle) {
    switch (powerUp.effect) {
        case PowerUpEffect.DOUBLE_PADDLE_WIDTH:
            paddle.width *= 2;
            break;
        case PowerUpEffect.HALF_PADDLE_WIDTH:
            paddle.width /= 2;
            break;
        case PowerUpEffect.DOUBLE_BALL_SPEED:
            paddle.y *= 2;
            break;
        case PowerUpEffect.HALF_BALL_SPEED:
            paddle.y /= 2;
            break;
        case PowerUpEffect.EXTRA_POINTS:
            console.log("Extra points power-up applied");
            break;
        case PowerUpEffect.NEGATIVE_POINTS:
            console.log("Negative points power-up applied");
            break;
        default:
            break;
    }
}
