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
const ball = new Ball(canvas.width / 2, canvas.height - paddleHeight - 10, 2, -2, 10, 'red', paddle);
const extraPointsTarget = new ExtraPointsTarget(50, 50, 10, 30, 'green');
const ballPowerUpMechanics = new BallPowerUpMechanics();

// Create bricks
const bricks: Brick[] = [];
const brickColumns = 10;
const brickRows = 5;
const brickWidth = 60;
const brickHeight = 20;
const brickHorizontalSpacing = (canvas.width - brickColumns * brickWidth) / (brickColumns + 1);
const brickVerticalSpacing = (canvas.height / 2 - brickRows * brickHeight) / (brickRows + 1);

for (let i = 0; i < brickColumns; i++) {
    for (let j = 0; j < brickRows; j++) {
        bricks.push(new Brick((i + 1) * brickHorizontalSpacing + i * brickWidth, (j + 1) * brickVerticalSpacing + j * brickHeight, brickWidth, brickHeight, 'blue'));
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
