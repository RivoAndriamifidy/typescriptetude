"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const shape_1 = require("./shape");
class Circle extends shape_1.Shape {
    constructor(theX, theY, _radius) {
        super(theX, theY);
        this._radius = _radius;
        this.radius = _radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        if (value > 0) {
            this._radius = value;
        }
        else {
            throw new Error("Radius must be greater than 0");
        }
    }
    getInfo() {
        return super.getInfo() + `radius: ${this._radius}`;
    }
    calculateArea() {
        return Math.PI * Math.pow(this._radius, 2);
    }
}
exports.Circle = Circle;
