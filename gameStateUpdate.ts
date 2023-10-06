import Ball from './ball';
import BallPowerUpMechanics from './ballPowerUpMechanics';
import ExtraPointsTarget from './ExtraPointsTarget';
import NegativePointsTarget from './NegativePointsTarget';
import { checkCollisions } from './checkCollisions';
import { checkGameOver } from './checkGameOver';

export function updateGameState(ball: Ball, ballPowerUpMechanics: BallPowerUpMechanics, extraPointsTarget: ExtraPointsTarget, negativePointsTarget: NegativePointsTarget): void {
    try {
        ballPowerUpMechanics.updateBallAndPowerUps();
        checkCollisions(ball, ballPowerUpMechanics, extraPointsTarget, negativePointsTarget);
        checkGameOver(ball);
    } catch (error) {
        console.error('An error occurred during game state update:', error);
    }
}
