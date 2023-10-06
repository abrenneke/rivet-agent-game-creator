import { PowerUpEffect, PowerUpEffectInterface } from './powerUp';

class PowerUpFactory {
    static powerUpEffects: PowerUpEffect[] = ['speedUp', 'slowDown', 'sizeUp', 'sizeDown'];

    static createPowerUp(): PowerUpEffectInterface {
        const x = Math.random() * 800; // game width
        const y = Math.random() * 600; // game height
        const radius = 20; // fixed radius for power-ups
        const effect = this.powerUpEffects[Math.floor(Math.random() * this.powerUpEffects.length)];
        const reset = () => {}; // reset function currently does nothing

        return { x, y, radius, effect, reset };
    }
}

export default PowerUpFactory;
