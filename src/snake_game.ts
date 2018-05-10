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

        this.startNewGame();

        setInterval(() => {
            this.nextStep();
        }, Constant.GAME_SPEED);
        this.keyboardInput();
    }

    public nextStep(): void {
        this.snake.move();
        if(this.snake.snakeSlidesIntoItself()) {
            this.startNewGame();
            return;
        }
        this.draw();
    }

    public snakeFoundFood(): void {
        this.placeNewFood();
        this.increaseScore();
    }

    public startNewGame(): void {
        this.snake = new Snake(this);
        this.food = new Food(4, 4);
        this.draw();
        this.score = 0;
    }

    private placeNewFood(): void {
        var x : number = Math.floor(Math.random() * (Constant.GAME_WIDTH - 1 + 1)) + 1;
        var y : number = Math.floor(Math.random() * (Constant.GAME_HEIGHT - 1 + 1)) + 1;
        var food : Food = new Food(x, y);

        while(this.snake.snakeIsNotHere(food)) {
            x = Math.floor(Math.random() * (Constant.GAME_WIDTH - 1 + 1)) + 1;
            y = Math.floor(Math.random() * (Constant.GAME_HEIGHT - 1 + 1)) + 1;
            food = new Food(x, y);
        }

        this.food = food;
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

// initialize & start the game
var Game : SnakeGame = new SnakeGame();



