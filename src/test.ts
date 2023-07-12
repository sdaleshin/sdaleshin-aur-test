import {GreeterClass, Utils} from "./index";


const u = new Utils();
const g = new GreeterClass(u)
console.log(g.greet('User'))
