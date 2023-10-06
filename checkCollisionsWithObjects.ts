import Ball from './ball';

export function checkCollisionsWithObjects(ball: Ball, gameObjects: any[]): void {
    // Get the current position of the ball
    let ballPosition = {x: ball.x, y: ball.y};

    // Check for collisions between the ball and game objects
    for (let gameObject of gameObjects) {
        if (ball.intersects(gameObject)) {
            ball.handleCollision();
        }
    }
}
