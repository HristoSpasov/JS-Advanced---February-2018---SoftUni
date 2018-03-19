class SortedList{
    constructor(){
        this.myCollection = [];
        this.size = 0;
    }

    add(element) {
        this.myCollection.push(element);
        this.size++;
        this.sort();
    }

    remove(index) {
        if (this.isInBounds(index)){
            this.myCollection.splice(index, 1);
            this.size--;
            this.sort();
        }
    }

    get(index) {
        if (this.isInBounds(index))
            return this.myCollection[index];
    }


    sort() {
        this.myCollection.sort((a, b) => a - b);
    }

    isInBounds(index) {
        return index >= 0 && index < this.myCollection.length;
    }
}

let myList = new SortedList();

myList.add(5);
myList.add(3);
myList.remove(0);
console.log(myList.get(0));
console.log(myList.size);
