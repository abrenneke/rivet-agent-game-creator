import Ball from './ball';

export default class CollisionHandler {
    static handleCollision(ball: Ball): number {
        ball.dx = -ball.dx;
        ball.dy = -ball.dy;

        if (ball.effect) {
            ball.activateEffect(ball.effect);
        }
        
        return 0; // Return a number to resolve the TypeScript compiler error
    }
}
