import Ball from './ball';
import Paddle from './paddle';
import ExtraPointsTarget from './ExtraPointsTarget';
import Brick from './Brick';
import BallPowerUpMechanics from './ballPowerUpMechanics';
import PaddlePowerUpMechanics from './PaddlePowerUpMechanics';

export type GameObjects = {
    paddle: Paddle;
    ball: Ball;
    extraPointsTarget: ExtraPointsTarget;
    ballPowerUpMechanics: BallPowerUpMechanics;
    paddlePowerUpMechanics: PaddlePowerUpMechanics;
    bricks: Brick[];
};
