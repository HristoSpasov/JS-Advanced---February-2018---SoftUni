function solve(arr, order){
    return arr.sort(function (a, b) {
        if (order === 'asc'){
            return a - b;
        }

        return b - a;
    });
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));