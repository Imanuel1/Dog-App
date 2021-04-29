export default class Breed{
    constructor(nameOrObject, index){
        //for loading the json data
        if (arguments.length === 1 && typeof nameOrObject === "object") {
            this.name = nameOrObject.name;
            this.url = nameOrObject.url;
        } else {
            //for updating data
            this.name = nameOrObject;
            this.url = url;
        }
    }
}