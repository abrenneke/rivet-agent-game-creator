export default class Brick {
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    state: number;

    constructor(x: number, y: number, width: number, height: number, color: string) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.state = 1; // Visible
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (this.state === 1) {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
    }

    intersects(ball: {x: number, y: number, radius: number}) {
        if (this.state === 0) {
            return false;
        }

        let dx = Math.abs(ball.x - (this.x + this.width / 2));
        let dy = Math.abs(ball.y - (this.y + this.height / 2));

        if (dx > (this.width / 2 + ball.radius)) { return false; }
        if (dy > (this.height / 2 + ball.radius)) { return false; }

        if (dx <= (this.width / 2)) { return true; } 
        if (dy <= (this.height / 2)) { return true; }

        let cornerDistance_sq = Math.pow((dx - this.width / 2), 2) +
                                 Math.pow((dy - this.height / 2), 2);

        return (cornerDistance_sq <= Math.pow(ball.radius, 2));
    }

    handleCollision() {
        this.state = 0; // Destroyed
    }
}
