function createComputerHierarchy() {
    class Part {
        constructor(manufacturer) {
            if (this.constructor === Part) {
                throw new TypeError('Cannot make instance of an abstract class Part!');
            }

            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Part {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends Part {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Battery extends Part {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (this.constructor === Computer) {
                throw new TypeError('Cannot make instance of an abstract class Computer!');
            }

            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(bat) {
            if (!(bat instanceof Battery)) {
                throw new TypeError('Passed in argument is not Battery type!');
            }

            this._battery = bat;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(kb) {
            if (!(kb instanceof Keyboard)) {
                throw new TypeError('Passed in argument is not Keyboard type!');
            }

            this._keyboard = kb;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(mon) {
            if (!(mon instanceof Monitor)) {
                throw new TypeError('Passed in argument is not monitor type!');
            }

            this._monitor = mon;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}