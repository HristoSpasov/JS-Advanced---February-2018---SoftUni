let sum = require('./sumOfNumbers.js').sum;
let expect = require('chai').expect;

describe('Test sum array', () => {
    it('Should work with empty arr', () =>{
        // Arrange
        let arr = [];
        let expected = 0;

        // Act
        let result = sum(arr);

        // Assert
        expect(result).to.be.equal(0);
    });

    it('Should work with one element', () => {
        // Arrange
        let arr = [10];
        let expected = 10;

        // Act
        let result = sum(arr);

        // Assert
        expect(result).to.be.equal(10);
    });

    it('Should work with numbers as strings', () => {
        // Arrange
        let arr = ['10', '20', '70'];
        let expected = 100;

        // Act
        let result = sum(arr);

        // Assert
        expect(result).to.be.equal(100);
    });

    it('Should work with fraction numbers', () => {
        // Arrange
        let arr = [1.1, 1.1, 1.1];
        let expected = 3.3;

        // Act
        let result = sum(arr);

        // Assert
        expect(result).to.be.closeTo(expected, 0.01);
    });

    it('Should work with negative values', () => {
        // Arrange
        let arr = [-10, -20];
        let expected = -30;

        // Act
        let result = sum(arr);

        // Assert
        expect(result).to.be.equal(-30);
    });



    it('Should return NaN if invalid elements are passed in the array', () => {
        // Arrange
        let arr = [5, 'invalid', {invalid: 'invalid'}, new Map(), 10];

        // Act
        let result = sum(arr);

        // Assert
        expect(result).to.be.NaN;
    });
});