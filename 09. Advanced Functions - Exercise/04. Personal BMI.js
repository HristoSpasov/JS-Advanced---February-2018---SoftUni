function calcBmi(name, age, weight, height) {
    let bmi = weight / ((height / 100) * (height / 100));
    let status = '';

    if (bmi < 18.5) {
        status = 'underweight';
    } else if (bmi < 25) {
        status = 'normal';
    } else if (bmi < 30) {
        status = 'overweight';
    } else {
        status = 'obese';
    }

    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(bmi),
        status: status
    };

    if (person.status === 'obese'){
        person.recommendation = 'admission required';
    }

    return person;
}

console.log(calcBmi('Peter', 29, 75, 182));
console.log(calcBmi('Honey Boo Boo', 9, 57, 137));