function gcd(num1, num2){
    while(num1 % num2 !== 0 && num2 % num1 !== 0){
        if(num1 > num2){
            num1 = num1 % num2;
        } else {
            num2 = num2 % num1;
        }
    }

    return Math.min(num1, num2);
}

console.log(gcd(252, 105));