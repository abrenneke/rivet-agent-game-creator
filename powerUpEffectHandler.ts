import { deactivateEffect } from './deactivateEffect';

export class PowerUpEffectHandler {
    effectMap: {[key: string]: () => void};

    constructor() {
        this.effectMap = {
            'speedUp': () => { return 2; },
            'slowDown': () => { return 0.5; },
            'sizeUp': () => { return 1.5; },
            'sizeDown': () => { return 0.5; },
        };
    }

    activateEffect(effect: string) {
        return this.effectMap[effect] && this.effectMap[effect]();
    }

    deactivateEffect = deactivateEffect;
}
