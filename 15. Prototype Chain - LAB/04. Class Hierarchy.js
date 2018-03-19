function resulr() {

    class Figure {
        constructor() {
            if (this.constructor.name === 'Figure') {
                throw new TypeError('Cannot make instance of an abstract class!');
            }
        }

        get area() {
            switch (this.constructor) {
                case Circle:
                    return Math.PI * Math.pow(this.radius, 2);
                case Rectangle:
                    return this.width * this.height;
                default:
                    throw new Error('Figure area formula not defined');
            }
        }

        toString() {
            let type = this.constructor.name;
            let props = Object.getOwnPropertyNames(this);

            return `${type} - ${props.map(pr => `${pr}: ${this[pr]}`).join(', ')}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}


//let f = new Figure();       //Error
// let c = new Circle(5);
// console.log(c.area);        //78.53981633974483
// console.log(c.toString());  //Circle - radius: 5
// let r = new Rectangle(3, 4);
// console.log(r.area);        //12
// console.log(r.toString());  //Rectangle - width: 3, height: 4