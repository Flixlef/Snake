import { Field } from "./field";
import { Direction } from "./direction";
import { SnakeGame } from "./snake_game";
import { Constant } from "./constant";

export class Snake {
    private game : SnakeGame;
    private head : Field;
    private tail : Field[];
    private size : number;
    private direction: Direction;

    constructor(game: SnakeGame) {
        this.head = new Field(2, 7);
        this.tail = [];
        this.size = 0;
        this.game = game;
    }

    public draw(ctx : CanvasRenderingContext2D): void {
        ctx.fillStyle = "red";
        this.drawField(this.head, ctx, Constant.FIELD_SIZE);
        for(var i: number = 0; i < this.tail.length; i++) {
            this.drawField(this.tail[i], ctx, Constant.FIELD_SIZE);
        }
    }

    public changeDirection(direction: Direction): void {
        if(direction === Direction.LEFT && this.direction === Direction.RIGHT) {
            return;
        } else if (direction === Direction.UP && this.direction === Direction.DOWN) {
            return;
        } else if (direction === Direction.DOWN && this.direction === Direction.UP) {
            return;
        } else if (direction === Direction.RIGHT && this.direction === Direction.LEFT) {
            return;
        }
        this.direction = direction;
    }

    public move(): boolean {
        if(this.direction === undefined) {
            return;
        }
        // add current head to tail
        this.tail.push(this.head);

        // get next position
        this.head = this.getNext();

        if(this.head.detectCollision(this.game.food)) {
            this.size++;
            this.game.snakeFoundFood();
        }

        // fix the worm size
        if (this.tail.length > this.size) {
            this.tail.splice(0, 1);
        }

        return this.snakeSlidesIntoItself();
    }

    public fieldsAreEmpty(field: Field): boolean {
        var collision : boolean = false;

        if(this.head.detectCollision(field)) {
            collision = true;
        }

        for(var i: number = 0; i < this.tail.length; i++) {
            if(this.tail[i].detectCollision(field)) {
                collision = true;
            }
        }

        return collision;
    }


    private snakeSlidesIntoItself(): boolean {
        for(var i: number = 0; i < this.tail.length; i++) {
            if(this.head.detectCollision(this.tail[i])) {
                return true;
            }
        }

        return false;
    }

    private getNext(): Field {
        switch (this.direction) {
            case Direction.UP:
                if(this.head.y - 1 < 1) {
                    return new Field(this.head.x, Constant.GAME_HEIGHT);
                } else {
                    return new Field(this.head.x, this.head.y - 1);
                }
            case Direction.RIGHT:
                if(this.head.x + 1 > Constant.GAME_WIDTH) {
                    return new Field(1, this.head.y);
                } else {
                    return new Field(this.head.x + 1, this.head.y);
                }
            case Direction.DOWN:
                if(this.head.y === Constant.GAME_HEIGHT) {
                    return new Field(this.head.x, 1);
                } else {
                    return new Field(this.head.x, this.head.y + 1);
                }
            case Direction.LEFT:
                if(this.head.x - 1 === 0) {
                    return new Field(Constant.GAME_WIDTH, this.head.y);
                } else {
                    return new Field(this.head.x-1, this.head.y);
                }
        }
    }

    private drawField(snakePart: Field, ctx: CanvasRenderingContext2D, size: number): void {
        ctx.fillRect((snakePart.x - 1) * size, (snakePart.y - 1) * size, size, size);
    }
}