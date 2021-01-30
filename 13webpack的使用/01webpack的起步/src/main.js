//使用commonjs模块化规范
const {add,mul} = require('./mathUtils')
console.log(add(20, 30));
//es6模块化规范
import {name,age,height} from './info'

console.log(name);
console.log(age);
console.log(height);
