"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        if (value >= 0) {
            this._x = value;
        }
    }
    get y() {
        return this._y;
    }
    set y(value) {
        if (value >= 0) {
            this._y = value;
        }
    }
    getInfo() {
        return `x=${this._x}, y=${this._y}`;
    }
}
exports.Shape = Shape;
