import { PowerUpEffectInterface } from './powerUp';
import { PowerUpEffectHandler } from './powerUpEffectHandler';
import CollisionHandler from './collisionHandler';
import { activateEffect } from './activateEffect';
import { deactivateEffect } from './deactivateEffect';
import Paddle from './paddle';

export default class Ball {
    x: number;
    y: number;
    dx: number;
    dy: number;
    radius: number;
    speedMultiplier: number;
    sizeMultiplier: number;
    effect: string | null;
    powerUpEffectHandler: PowerUpEffectHandler;
    paddle: Paddle;

    constructor(x: number, y: number, dx: number, dy: number, radius: number, effect: string | null, paddle: Paddle) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.speedMultiplier = 1;
        this.sizeMultiplier = 1;
        this.effect = effect;
        this.powerUpEffectHandler = new PowerUpEffectHandler();
        this.paddle = paddle;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * this.sizeMultiplier, 0, Math.PI * 2);
        ctx.fillStyle = '#0095DD';
        ctx.fill();
        ctx.closePath();
    }

    update(canvasWidth: number, canvasHeight: number) {
        // Check if ball's position intersects with paddle's position
        if (this.x + this.radius > this.paddle.x &&
            this.x - this.radius < this.paddle.x + this.paddle.width &&
            this.y + this.radius > this.paddle.y &&
            this.y - this.radius < this.paddle.y + this.paddle.height) {
            this.handlePaddleCollision();
        }

        if (this.x + this.dx > canvasWidth - this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }

        if (this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        } else if (this.y + this.dy > canvasHeight - this.radius) {

        }


        this.x += this.dx;
        this.y += this.dy;

    }

    intersects(target: PowerUpEffectInterface) {
        let dx = this.x - target.x;
        let dy = this.y - target.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        return distance < this.radius + target.radius;
    }

    handlePaddleCollision() {
        CollisionHandler.handleCollision(this, this.paddle);
    }

    activateEffect(effect: string) {
        let effectValue = activateEffect(effect);
        if (['speedUp', 'slowDown'].includes(effect)) {
            this.speedMultiplier = effectValue;
            this.dx *= this.speedMultiplier;
            this.dy *= this.speedMultiplier;
        } else if (['sizeUp', 'sizeDown'].includes(effect)) {
            this.sizeMultiplier = effectValue;
        }
    }

    deactivateEffect(effect: string) {
        let effectValue = deactivateEffect(effect);
        if (['speedUp', 'slowDown'].includes(effect)) {
            this.speedMultiplier = effectValue;
            this.dx /= this.speedMultiplier;
            this.dy /= this.speedMultiplier;
        } else if (['sizeUp', 'sizeDown'].includes(effect)) {
            this.sizeMultiplier = effectValue;
        }
    }
}
