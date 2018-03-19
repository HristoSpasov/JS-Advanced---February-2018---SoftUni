(function result() {
    let add = (v1, v2) => [v1[0] + v2[0], v1[1] + v2[1]];

    let multiply = (v, scalar) => [v[0] * scalar, v[1] * scalar];

    let length = (v) => Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));

    let dot = (v1, v2) =>  v1[0] * v2[0] + v1[1] * v2[1];

    let cross = (v1, v2) => v1[0] * v2[1] - v2[0] * v1[0];

    return {add, multiply, length, dot, cross}
})();