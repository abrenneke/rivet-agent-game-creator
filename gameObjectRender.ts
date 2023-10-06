import Ball from './ball';

export function drawGameObjects(ctx: CanvasRenderingContext2D, ball: Ball): void {
    try {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ball.draw(ctx);
    } catch (error) {
        console.error('An error occurred during game object drawing:', error);
    }
}
