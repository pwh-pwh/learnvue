import {flag} from './aaa.js'
if(flag) {
  console.log('hhh');
  alert('hhh')
}
//导入default
import add from "./aaa.js"
//统一全部导入
import * as aaa from './aaa.js'

console.log(aaa.flag);
