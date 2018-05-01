export class Field {
    public nextField : Field;
    public x : number;
    public y : number;

    constructor(x : number, y : number) {
        this.x = x;
        this.y = y;
        this.nextField = undefined;
    }

    public detectCollision(field: Field): boolean {
        return (this.x === field.x && this.y === field.y);
    }
}