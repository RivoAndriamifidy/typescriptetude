import { Shape } from './shape'
import{ Circle } from './circle'
import { Rectangle } from './rectangles'

let myshape = new Shape(5, 10)
console.log(myshape.getInfo())

let mycircle = new Circle(3, 10, 20)
console.log(mycircle.getInfo())

let myRectangle = new Rectangle(5, 10, 15, 20)
console.log(myRectangle.getInfo())