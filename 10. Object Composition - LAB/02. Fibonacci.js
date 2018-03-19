function getFibonator(){
    let counter = 1;
    let fib1 = 1;
    let fib2 = 1;

    return () => {
        let fib3 = fib1 + fib2;

        if(counter === 1 || counter === 2){
            // It is the first or second number
            fib3 = 1;
        }

        fib1 = fib2;
        fib2 = fib3;
        counter++;

        return fib2;
    };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
