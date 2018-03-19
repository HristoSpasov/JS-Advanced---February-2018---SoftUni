class Rat {
    constructor(name) {
        this.name = name;
        this.otherRats = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat === false) return;
        this.otherRats.push(otherRat);
    }

    getRats(){
        return this.otherRats;
    }

    toString() {
        let result = this.name + '\n';
        this.otherRats.forEach(rat => result += `##${rat}\n`);
        return result.trim();
    }
}


// let test = new Rat("Pesho");
// console.log(test.toString()); //Pesho
//
// console.log(test.getRats()); //[]
//
// test.unite(new Rat("Gosho"));
// test.unite(new Rat("Sasho"));
// console.log(test.getRats());
// //[ Rat { name: 'Gosho', unitedRats: [] },
// //  Rat { name: 'Sasho', unitedRats: [] } ]
//
// console.log(test.toString());
// // Pesho
// // ##Gosho
// // ##Sasho