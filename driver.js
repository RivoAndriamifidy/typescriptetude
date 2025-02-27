"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = require("./shape");
const circle_1 = require("./circle");
let myshape = new shape_1.Shape(5, 10);
console.log(myshape.getInfo());
let mycircle = new circle_1.Circle(3, 10, 20);
console.log(mycircle.getInfo());
