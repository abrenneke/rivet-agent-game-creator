export function deactivateEffect(effect: string) {
    if (['speedUp', 'slowDown'].includes(effect)) {
        return 0.5;
    } else if (['sizeUp', 'sizeDown'].includes(effect)) {
        return 0.75;
    } else {
        return 1;
    }
}
