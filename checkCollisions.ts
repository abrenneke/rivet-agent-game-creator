import Ball from './ball';
import BallPowerUpMechanics from './ballPowerUpMechanics';
import ExtraPointsTarget from './ExtraPointsTarget';
import NegativePointsTarget from './NegativePointsTarget';

export function checkCollisions(ball: Ball, ballPowerUpMechanics: BallPowerUpMechanics, powerUp1: ExtraPointsTarget, powerUp2: NegativePointsTarget): void {
    // Get the current position of the ball
    let ballPosition = {x: ball.x, y: ball.y};

    // Get the current power-ups
    let powerUps = ballPowerUpMechanics.powerUps;

    // Check for collisions between the ball and power-ups
    for (let powerUp of powerUps) {
        if (ball.intersects(powerUp)) {
            ball.handleCollision();
        }
    }

    // Check for collisions between the ball and the first power-up
    if (ball.intersects(powerUp1)) {
        powerUp1.handleCollision();
    }

    // Check for collisions between the ball and the second power-up
    if (ball.intersects(powerUp2)) {
        powerUp2.handleCollision();
    }
}
