function carFactory(car) {
    const engines = [
        [90, {power: 90, volume: 1800}],
        [120, {power: 120, volume: 2400}],
        [200, {power: 200, volume: 3500}]
    ];

    const carriages = [
        {hatchback: { type: 'hatchback', color: ''}},
        {coupe: { type: 'coupe', color: '' }}
    ];

    let newCar = {};
    newCar.model = car.model;
    newCar.engine = engines.sort((a, b) => a[0] - b[0]).filter(e => e[0] >= car.power)[0][1];
    newCar.carriage = carriages.filter(e => e[car.carriage])[0][car.carriage];
    newCar.carriage.color = car.color;
    newCar.wheels = getWheels();

    return newCar;

    function getWheels() {
        let wheelSize = car.wheelsize;
        if(Number(wheelSize) % 2 === 0){
            wheelSize--;
        }

        return [wheelSize, wheelSize, wheelSize, wheelSize];
    }
}

let car1 = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
};

let car2 = {
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
};

console.log(carFactory(car1));
console.log(carFactory(car2));