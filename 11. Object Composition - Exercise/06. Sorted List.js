function result() {
    let myCollection = [];
    let size = 0;

    function add(element) {
        myCollection.push(element);
        this.size++;
        sort();
    }

    function remove(index) {
        if (isInBounds(index)){
            myCollection.splice(index, 1);
            this.size--;
            sort();
        }
    }

    function get(index) {
        if (isInBounds(index))
            return myCollection[index];
    }


    function sort() {
        myCollection.sort((a, b) => a - b);
    }

    function isInBounds(index) {
        return index >= 0 && index < myCollection.length;
    }


    return {add, remove, get, size};
}

let myList = result();

myList.add(5);
myList.add(3);
myList.remove(0);
console.log(myList.get(0));
console.log(myList.size);
