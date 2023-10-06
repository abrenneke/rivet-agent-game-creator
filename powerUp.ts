export type PowerUpEffect = 'speedUp' | 'slowDown' | 'sizeUp' | 'sizeDown' | 'extraPoints'| 'negativePoints';

export interface PowerUpEffectInterface {
    effect: PowerUpEffect;
    reset: () => void;
    x: number;
    y: number;
    radius: number;
}

let activePowerUp: PowerUpEffectInterface | null = null;
let timer: NodeJS.Timeout | null = null;

function resetPowerUp(): void {
    if (activePowerUp) {
        activePowerUp = null;
    }

    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
}

const powerUpEffects: Record<PowerUpEffect, () => void> = {
    'speedUp': resetPowerUp,
    'slowDown': resetPowerUp,
    'sizeUp': resetPowerUp,
    'sizeDown': resetPowerUp,
    'extraPoints': resetPowerUp,
    'negativePoints': resetPowerUp
};

function applyPowerUp(powerUp: PowerUpEffectInterface): void {
    resetPowerUp();
    activePowerUp = powerUp;

    if (powerUp.effect in powerUpEffects) {
        timer = setTimeout(powerUpEffects[powerUp.effect], 5000);
    }
}

export default {
    resetPowerUp,
    applyPowerUp
};
