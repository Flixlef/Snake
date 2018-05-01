import { Field } from "./field";
import { Constant } from "./constant";

export class Food extends Field {
    public draw(ctx: CanvasRenderingContext2D):void {
        ctx.fillStyle = "green";
        ctx.fillRect((this.x - 1) * Constant.FIELD_SIZE, (this.y - 1) * Constant.FIELD_SIZE,Constant.FIELD_SIZE, Constant.FIELD_SIZE);
    }
}