function sortArrays(inputArr){
    let rectObj = [];

    let getRect = function(width, height){
        return {
            width: width,
            height: height,
            area: function() {
                return Number(this.width) * Number(this.height);
            },
            compareTo: function (other) {
                if(other.area() - this.area() !== 0){
                    return other.area() - this.area();
                }

                return (other.width - this.width);
            }
        }
    };

    // Loop over input
    for (let arr of inputArr) {
        let rect = getRect(arr[0], arr[1]);
        rectObj.push(rect);
    }

    rectObj.sort((a, b) => a.compareTo(b));

    return rectObj;
}

console.log(sortArrays([[10, 5], [3, 20], [5, 12]]));