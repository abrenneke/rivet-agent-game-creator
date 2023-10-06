import Ball from './ball';
import Paddle from './paddle';
import BallPowerUpMechanics from './ballPowerUpMechanics';
import ExtraPointsTarget from './ExtraPointsTarget';
import Brick from './Brick';

function update(paddle: Paddle, ball: Ball, extraPointsTarget: ExtraPointsTarget, ballPowerUpMechanics: BallPowerUpMechanics, bricks: Brick[], canvasWidth: number, canvasHeight: number) {
    paddle.update(canvasWidth);
    ball.update(canvasWidth, canvasHeight);
    extraPointsTarget.update(canvasWidth, canvasHeight);
    ballPowerUpMechanics.updateBall(ball);

    // Check for collisions with bricks
    for (let i = 0; i < bricks.length; i++) {
        if (bricks[i].intersects(ball)) {
            bricks[i].handleCollision();
            ball.dy = -ball.dy; // Change ball direction
            break; // Break as soon as a collision is detected and handled
        }
    }
}

export default update;
