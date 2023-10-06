class Score {
    value: number;

    constructor() {
        this.value = 0;
    }

    increment(amount: number): void {
        this.value += amount;
    }

    decrement(amount: number): void {
        if (this.value - amount < 0) {
            this.value = 0;
        } else {
            this.value -= amount;
        }
    }

    update(): void {
        const scoreElement = document.getElementById('score');
        if (scoreElement) {
            scoreElement.innerText = `Score: ${this.value}`;
        }
    }
}

export default Score;
