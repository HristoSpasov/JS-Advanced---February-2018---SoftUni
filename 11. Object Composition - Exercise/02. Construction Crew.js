function workerModify(worker){
    if(worker.handsShaking){
        worker.bloodAlcoholLevel += worker.weight * worker.experience * 0.1;
        worker.handsShaking = false;
    }

    return worker;
}

let worker1 = { weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true };

let worker2 = { weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true };

let worker3 = { weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false };

console.log(workerModify(worker1));
console.log(workerModify(worker2));
console.log(workerModify(worker3));