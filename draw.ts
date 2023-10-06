export function draw(ctx: CanvasRenderingContext2D, gameObjects: any) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    gameObjects.paddle.draw(ctx);
    gameObjects.ball.draw(ctx);
    gameObjects.extraPointsTarget.draw(ctx);
    gameObjects.bricks.forEach((brick: any) => brick.draw(ctx));
}
