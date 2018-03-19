function arrayMaxElement(intArr){
    return Math.max.apply(undefined, intArr);
}

console.log(arrayMaxElement([10, 20, 5]));