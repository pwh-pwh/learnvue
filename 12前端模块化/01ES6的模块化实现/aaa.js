var name = 'aaa'
var age = 20
var flag = true
function sum(num1,num2) {
  return num1+num2
}

if (flag) {
  console.log(sum(20, 30));
}
//方式1
export {
  flag,sum
}
//方式2
export var num1 = 10000;
export var num2 = 200;
//导出函数/类
export function mul(n1,n2) {
  return n1*n2
}

export class Person {
  constructor(name,age) {
    this.name=name;
    this.age=age;
  }
 run() {
   console.log('run');
 }

}

const address = '北京市'
//只能有一个default
export default address
