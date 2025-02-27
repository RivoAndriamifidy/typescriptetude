import { Shape } from './shape'
import{ Circle } from './circle'

let myshape = new Shape(5, 10)
console.log(myshape.getInfo())

let mycircle = new Circle(3, 10, 20)
console.log(mycircle.getInfo())