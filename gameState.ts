const canvas: HTMLCanvasElement = document.getElementById('gameCanvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

class GameState {
  gameOver: boolean;
  playerScore: number;

  constructor() {
    this.gameOver = false;
    this.playerScore = 0;
  }
}

const gameState = new GameState();

export { ctx, canvas, GameState, gameState };
