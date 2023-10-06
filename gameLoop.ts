import Ball from './ball';
import Paddle from './paddle';
import { checkCollisions } from './checkCollisions';
import ExtraPointsTarget from './ExtraPointsTarget';
import NegativePointsTarget from './NegativePointsTarget';
import BallPowerUpMechanics from './ballPowerUpMechanics';

export default function gameLoop(ctx: CanvasRenderingContext2D, ball: Ball, paddle: Paddle, extraPointsTarget: ExtraPointsTarget, negativePointsTarget: NegativePointsTarget, ballPowerUpMechanics: BallPowerUpMechanics) {
    // Clear the canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Draw the ball and the paddle
    ball.draw(ctx);
    paddle.draw(ctx);

    // Update the position of the ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Check for collisions
    checkCollisions(ball, ballPowerUpMechanics, extraPointsTarget, negativePointsTarget);
    checkCollisions(ball, ballPowerUpMechanics, extraPointsTarget, negativePointsTarget);

    // If the ball hits the left or right wall, reverse its direction
    if (ball.x + ball.dx > ctx.canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
        ball.dx = -ball.dx;
    }

    // If the ball hits the top wall or the paddle, reverse its direction
    if (ball.y + ball.dy < ball.radius) {
        ball.dy = -ball.dy;
    } else if (ball.y + ball.dy > ctx.canvas.height - ball.radius) {
        if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
            ball.dy = -ball.dy;
        } else {
            // The game is over
            console.log('GAME OVER');
        }
    }
}
