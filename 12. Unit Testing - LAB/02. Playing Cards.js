function makeCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = new Map();
    validSuits.set('S', '\u2660');
    validSuits.set('H', '\u2665');
    validSuits.set('D', '\u2666');
    validSuits.set('C', '\u2663');

    if(!validFaces.includes(face)) {
        throw new Error();
    }

    if(!validSuits.has(suit)) {
        throw new Error();
    }

    let card = {
        face: face,
        suit: suit,
        toString: () => `${card.face}${validSuits.get(card.suit)}`
    };

    return card;
}

console.log('' + makeCard('A', 'S'));	// A♠
console.log('' + makeCard('10', 'H'));	// 10♥
console.log('' + makeCard('1', 'C'));	// Error
