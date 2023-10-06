import ExtraPointsTarget from '../ExtraPointsTarget';
import NegativePointsTarget from '../NegativePointsTarget';
import Ball from '../ball';
import BallPowerUpMechanics from '../ballPowerUpMechanics';
import GameLoop from '../gameLoop';
import Paddle from '../paddle';

window.onload = () => {
    const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const ball = new Ball(canvasWidth / 2, canvasHeight - 30, 10, 10, 10, null);
    const paddle = new Paddle((canvasWidth - 75) / 2, canvasHeight - 10, 75, 10);
    const extraPointsTarget = new ExtraPointsTarget(10, 10, 30, 30, 'green');
    const negativePointsTarget = new NegativePointsTarget(50, 50, 30, 30, 'red');
    const ballPowerUpMechanics = new BallPowerUpMechanics(ball, [extraPointsTarget, negativePointsTarget]);

    if (ctx) {
        const loop = () => {
            GameLoop(ctx, ball, paddle, extraPointsTarget, negativePointsTarget, ballPowerUpMechanics);
            requestAnimationFrame(loop);
        };
        loop();
    }
};
