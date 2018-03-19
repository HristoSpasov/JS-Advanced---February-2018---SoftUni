function printDeckOfCards(cards) {
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

    let result = [];

    for (let card of cards) {
        let face = card.substring(0, card.length - 1);
        let suit = card.substr(card.length - 1);

        try{
            result.push(makeCard(face, suit));
        } catch (err){
            console.log(`Invalid card: ${card}`);
            return;
        }
    }

    console.log(result.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
