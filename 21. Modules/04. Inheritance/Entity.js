class Entity{
    constructor(name){
        if(this.constructor === Entity){
            throw new TypeError('Cannot create abstract class instance!');
        }

        this.name = name;
    }
}

module.exports = Entity;