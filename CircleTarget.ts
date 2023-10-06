import Target from './target';

class CircleTarget extends Target {
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height, true);
    }
}

export default CircleTarget;
