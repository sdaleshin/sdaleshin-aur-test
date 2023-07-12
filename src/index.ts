export const Greeter = (name: string) => `Hello ${name}`;
export class Utils {
    prepareString(str: string){
        return 'PPP ' + str
    }
}
export class GreeterClass {
    utils: Utils;

    constructor(utils: Utils) {
        this.utils = utils
    }

    greet(name: string){
        return this.utils.prepareString(`Hello ${name} from class`)
    }
}
