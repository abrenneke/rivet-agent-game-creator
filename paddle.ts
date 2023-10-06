export default class Paddle {
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number = 5;
    moveLeft: boolean = false;
    moveRight: boolean = false;
    canvas: HTMLCanvasElement;

    constructor(x: number, y: number, width: number, height: number, canvas: HTMLCanvasElement) {
        this.x = x;
        this.y = y - 10; // Adjust the paddle to be slightly off the bottom
        this.width = width;
        this.height = height;
        this.canvas = canvas;

        window.addEventListener('keydown', this.handleKeyDown.bind(this));
        window.addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    handleKeyDown(event: KeyboardEvent) {
        switch (event.code) {
            case 'ArrowLeft':
                this.moveLeft = true;
                break;
            case 'ArrowRight':
                this.moveRight = true;
                break;
        }
    }

    handleKeyUp(event: KeyboardEvent) {
        switch (event.code) {
            case 'ArrowLeft':
                this.moveLeft = false;
                break;
            case 'ArrowRight':
                this.moveRight = false;
                break;
        }
    }

    handleMouseMove(event: MouseEvent) {
        const relativeX = event.clientX - this.canvas.offsetLeft;
        if (relativeX > 0 && relativeX < this.canvas.width) {
            this.x = relativeX - this.width / 2;
        }
    }

    move(canvasWidth: number) {
        if (this.moveLeft && this.x > 0) {
            this.x -= this.speed;
        }

        if (this.moveRight && this.x + this.width < canvasWidth) {
            this.x += this.speed;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update(canvasWidth: number) {
        this.move(canvasWidth);
    }

    isColliding(object: {x: number, y: number, width: number, height: number}): boolean {
        return this.x < object.x + object.width &&
               this.x + this.width > object.x &&
               this.y < object.y + object.height &&
               this.y + this.height > object.y;
    }
}
