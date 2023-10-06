import { PowerUpEffectInterface } from './powerUp';
import { PowerUpEffectHandler } from './powerUpEffectHandler';
import CollisionHandler from './collisionHandler';
import { activateEffect } from './activateEffect';
import { deactivateEffect } from './deactivateEffect';

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

    constructor(x: number, y: number, dx: number, dy: number, radius: number, effect: string | null) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.speedMultiplier = 1;
        this.sizeMultiplier = 1;
        this.effect = effect;
        this.powerUpEffectHandler = new PowerUpEffectHandler();
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#0095DD';
        ctx.fill();
        ctx.closePath();
    }

    intersects(target: PowerUpEffectInterface) {
        let dx = this.x - target.x;
        let dy = this.y - target.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        return distance < this.radius + target.radius;
    }

    handleCollision() {
        CollisionHandler.handleCollision(this);
    }

    activateEffect(effect: string) {
        let effectValue = activateEffect(effect);
        if (['speedUp', 'slowDown'].includes(effect)) {
            this.speedMultiplier = effectValue;
        } else if (['sizeUp', 'sizeDown'].includes(effect)) {
            this.sizeMultiplier = effectValue;
        }
    }

    deactivateEffect(effect: string) {
        let effectValue = deactivateEffect(effect);
        if (['speedUp', 'slowDown'].includes(effect)) {
            this.speedMultiplier = effectValue;
        } else if (['sizeUp', 'sizeDown'].includes(effect)) {
            this.sizeMultiplier = effectValue;
        }
    }
}
