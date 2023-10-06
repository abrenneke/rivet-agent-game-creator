import Ball from './ball';
import Paddle from './paddle';

export default class CollisionHandler {
    static handleCollision(ball: Ball, paddle: Paddle) {
        // Determine the relative position of the ball to the paddle
        const relativeIntersectX = (paddle.x + (paddle.width / 2)) - ball.x;

        // Normalize the value to -1 to 1 range
        const normalizedIntersectX = relativeIntersectX / (paddle.width / 2);

        // Calculate the angle of bounce
        const bounceAngle = normalizedIntersectX * (5 * Math.PI / 12);

        // Determine the direction based on which side of the paddle the ball hit
        const direction = normalizedIntersectX > 0 ? -1 : 1;

        const speed = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy);

        // Update ball direction based on the bounce angle and the hit side
        ball.dx = speed * ball.speedMultiplier * Math.sin(-bounceAngle);
        ball.dy = -speed * ball.speedMultiplier * Math.cos(bounceAngle);

        if (ball.effect) {
            ball.activateEffect(ball.effect);
        }
    }
}
