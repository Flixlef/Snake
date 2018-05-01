import { Snake } from "./snake";
import { Food } from "./food";
import { Direction } from "./direction";
import { Constant } from "./constant";

export class SnakeGame {
    public food : Food;
    private snake : Snake;
    private ctx : CanvasRenderingContext2D;
    private score : number;

    constructor() {
        var canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("snake");
        this.ctx = canvas.getContext("2d");
        this.snake = new Snake(this);
        this.food = new Food(4, 4);
        this.draw();
        setInterval(() => {
            this.nextStep();
        }, 100);
        this.keyboardInput();
        this.score = 0;
    }

    public nextStep(): void {
        this.snake.move();
        this.draw();
    }

    public snakeFoundFood(): void {
        this.placeNewFood();
        this.increaseScore();
    }

    private placeNewFood(): void {
        return;
    }

    private increaseScore(): void {
        this.score++;
    }

    private draw(): void {
        this.ctx.fillStyle = "grey";
        this.ctx.fillRect(0, 0, Constant.GAME_WIDTH * Constant.FIELD_SIZE, Constant.GAME_HEIGHT * Constant.FIELD_SIZE);
        this.food.draw(this.ctx);
        this.snake.draw(this.ctx);
    }

    private startGame(): void {
        return;
    }

    private keyboardInput(): void {
        document.addEventListener("keydown", (event: KeyboardEvent) => {
            if (event.keyCode === 37) {
            this.snake.changeDirection(Direction.LEFT);
            } else if (event.keyCode === 38) {
                this.snake.changeDirection(Direction.UP);
            } else if (event.keyCode === 39) {
                this.snake.changeDirection(Direction.RIGHT);
            } else if (event.keyCode === 40) {
                this.snake.changeDirection(Direction.DOWN);
            }
        });
    }
}

var Game : SnakeGame = new SnakeGame();



