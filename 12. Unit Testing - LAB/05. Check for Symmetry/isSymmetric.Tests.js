let isSymmetric = require('./isSymmetric.js').isSymmetric;
let expect = require('chai').expect;

describe('Test isSymmetric method functionality', () => {
    it('Should return false if input is not an array', () => {
       // Arrange
       let input = 'non array input';

       // Act
        let result = isSymmetric(input);

        // Assert
        expect(result).to.be.false;
    });

    it('Should return false if array is not symmetric and has odd elements', () => {
        // Arrange
        let input = [1, 2, 3, 3, 1];

        // Act
        let result = isSymmetric(input);

        // Assert
        expect(result).to.be.false;
    });

    it('Should return false if array is not symmetric and has even elements', () => {
        // Arrange
        let input = [1, 2, 3, 1];

        // Act
        let result = isSymmetric(input);

        // Assert
        expect(result).to.be.false;
    });

    it('Should return true if array is symmetric and has odd elements', () => {
        // Arrange
        let input = [1, 2, 3, 2, 1];

        // Act
        let result = isSymmetric(input);

        // Assert
        expect(result).to.be.true;
    });

    it('Should return true if array is symmetric and has even elements', () => {
        // Arrange
        let input = [1, 2, 2, 1];

        // Act
        let result = isSymmetric(input);

        // Assert
        expect(result).to.be.true;
    });

    it('Should return true if array has one element', () => {
        // Arrange
        let input = [2];

        // Act
        let result = isSymmetric(input);

        // Assert
        expect(result).to.be.true;
    });

    it('Should return false if array has two different elements', () => {
        // Arrange
        let input = [2, 3];

        // Act
        let result = isSymmetric(input);

        // Assert
        expect(result).to.be.false;
    });

    it('Should return true if array has two equal elements', () => {
        // Arrange
        let input = [2, 2];

        // Act
        let result = isSymmetric(input);

        // Assert
        expect(result).to.be.true;
    });

    it('Should return true if array is empty', () => {
        // Arrange
        let input = [];

        // Act
        let result = isSymmetric(input);

        // Assert
        expect(result).to.be.true;
    });

    it('Should return true for symmetric array with different element types', () => {
        // Arrange
        let input = ['first', new Map(), {third: 'third'}, {third: 'third'}, new Map(), 'first'];

        // Act
        let result = isSymmetric(input);

        // Assert
        expect(result).to.be.true;
    });

    it('Should return false for non symmetric array with different element types', () => {
        // Arrange
        let input = ['first', new Map(), {third: 'third'}, {third: 'third'}, {breakSymmetry: 'symmetry breaker' }, 'first'];

        // Act
        let result = isSymmetric(input);

        // Assert
        expect(result).to.be.false;
    });
});