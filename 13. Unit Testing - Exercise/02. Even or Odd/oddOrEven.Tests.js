let isOddOrEven = require('./evenOrOdd').isOddOrEven;
let expect = require('chai').expect;

describe('Test function', () => {
    it('Should return undefined for non string input', () => {
        // Arrange
        let input = 10;
        let expected = undefined;

        // Act
        let result = isOddOrEven(input);

        // Assert
        expect(result).is.equal(expected);
    });

    it('Should return undefined for non string input', () => {
        // Arrange
        let input = 10;
        let expected = undefined;

        // Act
        let result = isOddOrEven(input);

        // Assert
        expect(result).is.equal(expected);
    });

    it('Should return even for even words length', () => {
        // Arrange
        let input = 'thisIsEven';
        let expected = 'even';

        // Act
        let result = isOddOrEven(input);

        // Assert
        expect(result).is.equal(expected);
    });

    it('Should return odd for odd words length', () => {
        // Arrange
        let input = 'thisIsOdd';
        let expected = 'odd';

        // Act
        let result = isOddOrEven(input);

        // Assert
        expect(result).is.equal(expected);
    });
});