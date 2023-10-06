import PowerUpEffectClass from './PowerUpEffect';

export default class ExtraPointsTarget extends PowerUpEffectClass {
    constructor(public x: number, public y: number, public width: number, public height: number, public color: string) {
        super('extraPoints', Math.min(width, height) / 2, x, y, color);
    }

    handleCollision(): void {
        // Emit an event when a collision occurs
        const event = new CustomEvent('extraPointsCollision', { detail: { points: 10 } });
        window.dispatchEvent(event);
    }
}
