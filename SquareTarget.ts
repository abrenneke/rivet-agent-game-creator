import Target from './target.js';

class SquareTarget extends Target {
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height, true);
    }
}

export default SquareTarget;
