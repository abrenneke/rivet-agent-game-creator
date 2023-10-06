import { canvas } from './gameState';
import Ball from './ball';
import PowerUpFactory from './powerUpFactory';
import { PowerUpEffectInterface } from './powerUp';

export default class BallPowerUpMechanics {
    ball: Ball;
    powerUps: PowerUpEffectInterface[];
    effectTimeouts: Record<string, number>;

    constructor(ball: Ball, powerUps: PowerUpEffectInterface[]) {
        this.ball = ball;
        this.powerUps = powerUps;
        this.effectTimeouts = {};
    }

    generatePowerUp(): void {
        const powerUp = PowerUpFactory.createPowerUp();
        this.powerUps.push(powerUp);
    }

    updateBallAndPowerUps(): void {
        this.ball.x += this.ball.dx * this.ball.speedMultiplier;
        this.ball.y += this.ball.dy * this.ball.speedMultiplier;

        if (this.ball.x + this.ball.radius > canvas.width || this.ball.x - this.ball.radius < 0) {
            this.ball.dx = -this.ball.dx;
        }

        if (this.ball.y + this.ball.radius > canvas.height || this.ball.y - this.ball.radius < 0) {
            this.ball.dy = -this.ball.dy;
        }

        this.powerUps.forEach((powerUp: PowerUpEffectInterface) => {
            if (this.ball.intersects(powerUp)) {
                this.ball.handleCollision();
                this.activateEffect(powerUp.effect);
                powerUp.reset();
            }
        });
    }

    activateEffect(effect: string): void {
        this.deactivateEffect(effect);
        this.ball.activateEffect(effect);
        this.effectTimeouts[effect] = setTimeout(() => this.deactivateEffect(effect), 5000) as unknown as number;
    }

    deactivateEffect(effect: string): void {
        if (this.effectTimeouts[effect]) {
            clearTimeout(this.effectTimeouts[effect] as unknown as number);
            this.ball.deactivateEffect(effect);
            delete this.effectTimeouts[effect];
        }
    }
}
