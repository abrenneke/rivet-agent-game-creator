import PowerUpEffect from './PowerUpEffect';

export default class NegativePointsTarget extends PowerUpEffect {
    constructor(public x: number, public y: number, public width: number, public height: number, public color: string) {
        super('negativePoints', Math.min(width, height) / 2, x, y, color);
    }

    handleCollision(): void {
        // Emit an event when a collision occurs
        const event = new CustomEvent('negativePointsCollision', { detail: { points: -10 } });
        window.dispatchEvent(event);
    }
}
