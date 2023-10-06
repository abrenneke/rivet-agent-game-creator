import Ball from './ball';
import BallPowerUpMechanics from './ballPowerUpMechanics';
import { checkCollisions } from './checkCollisions';
import { checkGameOver } from './checkGameOver';
import ExtraPointsTarget from './ExtraPointsTarget';
import NegativePointsTarget from './NegativePointsTarget';

export function updateGameState(ball: Ball, ballPowerUpMechanics: BallPowerUpMechanics, extraPointsTarget: ExtraPointsTarget, negativePointsTarget: NegativePointsTarget): void {
    try {
        ballPowerUpMechanics.updateBallAndPowerUps();
        checkCollisions(ball, ballPowerUpMechanics, extraPointsTarget, negativePointsTarget);
        checkGameOver(ball);
    } catch (error) {
        console.error('An error occurred during game state update:', error);
    }
}

export function drawGameObjects(ctx: CanvasRenderingContext2D, ball: Ball, extraPointsTarget: ExtraPointsTarget, negativePointsTarget: NegativePointsTarget): void {
    try {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ball.draw(ctx);
        extraPointsTarget.draw(ctx);
        negativePointsTarget.draw(ctx);
    } catch (error) {
        console.error('An error occurred during game object drawing:', error);
    }
}
