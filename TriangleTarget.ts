import Target from './target.js';

class TriangleTarget extends Target {
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height, true);
    }
}

export default TriangleTarget;
