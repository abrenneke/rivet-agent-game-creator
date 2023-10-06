import { GameObjects } from './types';

function update(gameObjects: GameObjects, canvas: HTMLCanvasElement) {
    gameObjects.paddle.update(canvas.width);
    gameObjects.ball.update(canvas.width, canvas.height);
    gameObjects.extraPointsTarget.update(canvas.width, canvas.height);
    gameObjects.ballPowerUpMechanics.updateBall(gameObjects.ball);
    gameObjects.paddlePowerUpMechanics.updatePaddle(gameObjects.paddle);

    // Check for collisions with bricks
    for (let i = 0; i < gameObjects.bricks.length; i++) {
        if (gameObjects.bricks[i].intersects(gameObjects.ball)) {
            gameObjects.bricks[i].handleCollision();
            gameObjects.ball.dy = -gameObjects.ball.dy; // Change ball direction
            break; // Break as soon as a collision is detected and handled
        }
    }
}

export default update;
