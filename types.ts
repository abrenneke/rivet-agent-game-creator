import Ball from './ball';
import Paddle from './paddle';
import ExtraPointsTarget from './ExtraPointsTarget';
import Brick from './Brick';

export type GameObjects = {
    paddle: Paddle;
    ball: Ball;
    extraPointsTarget: ExtraPointsTarget;
    bricks: Brick[];
};
