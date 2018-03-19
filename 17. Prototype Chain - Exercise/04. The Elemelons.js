function solve() {
    class Melon{
        constructor(weight, melonSort){
            if(this.constructor === Melon){
                throw new TypeError('Abstract class cannot be instantiated directly');
            }

            this.weight = weight;
            this.melonSort = melonSort;
            this._elementIndex = this.weight * this.melonSort.length;
            this.childrenPropotypes = [Watermelon.prototype, Firemelon.prototype, Earthmelon.prototype, Airmelon.prototype];
        }

        get elementIndex (){
            return this._elementIndex;
        }

        toString(){
            let element = this.constructor.name.substr(0, this.constructor.name.length - 'melon'.length);
            return `Element: ${element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }

        morph(){
            let nextProto = this.childrenPropotypes.shift();
            Object.setPrototypeOf(this, nextProto);
            this.childrenPropotypes.push(nextProto);
        }
    }

    class Watermelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
    }

    class Firemelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
    }

    class Earthmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
    }

    class Airmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
    }

    class Melolemonmelon extends Watermelon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.morph();
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    }
}

let classes = solve();

let test = new classes.Melolemonmelon(150, "Melo");

test.morph();
test.morph();

console.log(test.toString());
