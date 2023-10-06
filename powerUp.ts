import Paddle from './paddle';

export interface PowerUpEffectInterface {
    x: number;
    y: number;
    radius: number;
    effect: string;
}

export const PowerUpEffect = {
    DOUBLE_PADDLE_WIDTH: 'DOUBLE_PADDLE_WIDTH',
    HALF_PADDLE_WIDTH: 'HALF_PADDLE_WIDTH',
    DOUBLE_BALL_SPEED: 'DOUBLE_BALL_SPEED',
    HALF_BALL_SPEED: 'HALF_BALL_SPEED'
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
        default:
            break;
    }
}
