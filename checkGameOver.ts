import Ball from './ball';
import { gameState } from './gameState';

const gameAreaHeight = 600;

export function checkGameOver(ball: Ball): void {
    let ballPosition = {x: ball.x, y: ball.y};
    if (ballPosition.y > gameAreaHeight) {
        console.log('Game over: The ball has fallen off the screen');
        gameState.gameOver = true;
    }
}
