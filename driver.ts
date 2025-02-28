import { Shape } from './shape'
import{ Circle } from './circle'
import { Rectangle } from './rectangles'


let mycircle = new Circle(3, 10, 20)
console.log(mycircle.getInfo())
console.log(mycircle.calculateArea())
console.log("-------------------")
let myRectangle = new Rectangle(5, 10, 15, 20)
console.log(myRectangle.getInfo())
console.log(myRectangle.calculateArea())