export function activateEffect(effect: string) {
    if (['speedUp', 'slowDown'].includes(effect)) {
        return 1.5;
    } else if (['sizeUp', 'sizeDown'].includes(effect)) {
        return 1.25;
    } else {
        return 1;
    }
}
