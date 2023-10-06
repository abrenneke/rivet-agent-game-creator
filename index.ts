import { initializeGame } from './gameInit';
import { draw } from './draw';
import update from './update';

const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

let gameObjects = initializeGame(canvas);

function gameLoop() {
    draw(ctx, gameObjects);
    update(gameObjects.paddle, gameObjects.ball, gameObjects.extraPointsTarget, gameObjects.ballPowerUpMechanics, gameObjects.bricks, canvas.width, canvas.height);
    requestAnimationFrame(gameLoop);
}

gameLoop();
