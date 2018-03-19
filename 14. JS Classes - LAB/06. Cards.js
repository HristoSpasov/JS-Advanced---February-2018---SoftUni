let result = (() => {
    const Suits = {
        SPADES: '\u2660',
        HEARTS: '\u2665',
        DIAMONDS: '\u2666',
        CLUBS: '\u2663'
    };

    const Faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if (!Faces.includes(value)) throw new Error('Invalid face');
            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if (!Object.keys(Suits).map(k => Suits[k]).includes(value)) throw new Error('Invalid suit');
            this._suit = value;
        }

        toString() {
            return this.face + this.suit;
        }
    }

    return { Card, Suits };
})();

let Card  = result.Card;
let Suits = result.Suits;

let card = new Card('Q', Suits.CLUBS);
//card.face = 'A';
card.suit = Suits.DIAMONDS;
//let card2 = new Card('1', Suits.DIAMONDS);




