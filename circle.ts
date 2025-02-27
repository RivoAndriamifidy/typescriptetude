import { Shape } from "./shape"
export class Circle extends Shape{
    constructor(theX: number, theY: number, private _radius: number){
        super(theX, theY)
        this.radius = _radius
    }

    get radius(): number{
        return this._radius
    }
    set radius(value: number){
        if(value > 0){
            this._radius = value
        }else{
            throw new Error("Radius must be greater than 0")
        }
    }
    getInfo(): string {
        return super.getInfo() + `radius: ${this._radius}`
    }
}