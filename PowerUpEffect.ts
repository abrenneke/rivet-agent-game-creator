import { PowerUpEffectInterface } from "./powerUp";
import { PowerUpEffect } from "./powerUp";

export default abstract class PowerUpEffectClass implements PowerUpEffectInterface {
    constructor(public effect: PowerUpEffect, public radius: number, public x: number, public y: number, public color: string) {}

    abstract handleCollision(): void;

    reset(): void {
        this.effect = 'sizeDown';
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
