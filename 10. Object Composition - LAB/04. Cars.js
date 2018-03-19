function solve(commands) {
    let processor = (function () {
        let cars = new Map();

        function create(name) {
            cars.set(name, {});
        }

        function inherit(name, parentName) {
            create(name);
            cars.set(name, Object.create(cars.get(parentName)));
        }

        function set(name, key, value) {
            cars.get(name)[key] = value;
        }

        function print(name) {
            let toPrint = cars.get(name);
            let objects = [];
            for (let k in toPrint) {
                objects.push(`${k}:${toPrint[k]}`);
            }

            return objects.join(', ');
        }

        return {create, inherit, set, print};
    })();

    for (let cmd of commands) {
        let args = cmd.split(' ');

        switch (args[0]){
            case 'create': {
                if(args.length > 2){
                    // Inherit
                    processor.inherit(args[1], args[3]);
                } else{
                   // Create
                    processor.create(args[1]);
                }
            } break;
            case 'set': {
                processor.set(args[1], args[2], args[3]);
            } break;
            case 'print': {
                console.log(processor.print(args[1]));
            } break;
        }
    }
}

solve([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);

