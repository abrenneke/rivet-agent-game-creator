import Ball from './ball';
import Paddle from './paddle';
import BallPowerUpMechanics from './ballPowerUpMechanics';
import ExtraPointsTarget from './ExtraPointsTarget';
import Brick from './Brick';
import update from './update';

const canvas = document.getElementById('game') as HTMLCanvasElement;
const context = canvas.getContext('2d')!;

const paddleHeight = 20;
const paddle = new Paddle(100, canvas.height - paddleHeight, 100, paddleHeight);
const ball = new Ball(100, 100, 2, 2, 10, 'red', paddle);
const extraPointsTarget = new ExtraPointsTarget(50, 50, 10, 30, 'green');
const ballPowerUpMechanics = new BallPowerUpMechanics();

// Create bricks
const bricks: Brick[] = [];
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
        bricks.push(new Brick(i * 70, j * 30, 60, 20, 'blue'));
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    paddle.draw(context);
    ball.draw(context);
    extraPointsTarget.draw(context);
    bricks.forEach(brick => brick.draw(context));
}

function gameLoop() {
    draw();
    update(paddle, ball, extraPointsTarget, ballPowerUpMechanics, bricks, canvas.width, canvas.height);
    requestAnimationFrame(gameLoop);
}

gameLoop();
