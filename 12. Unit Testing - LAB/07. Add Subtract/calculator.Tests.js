let createCalculator = require('./calculator.js').createCalculator;
let expect = require('chai').expect;

describe('Test calculator functions', () => {
    let calc;

    beforeEach(() => calc = createCalculator());

    it('Should have initial value 0', () => {
        // Arrange
        let value = calc.get();
        let expected = 0;

        // Act
        let result = calc.get();

        // Assert
        expect(result).to.be.equal(expected);
    });

    it('Should have add key', () => {
        // Arrange
        let expectedFunctionName = 'add';

        // Act
        let result = Object.keys(calc).includes('add');

        // Assert
        expect(result).to.be.true;
    });

    it('Add should be a function', () => {
        // Arrange
        let addFunction = calc.add;

        // Act
        let result = typeof(addFunction) === 'function';

        // Assert
        expect(result).to.be.true;
    });

    it('Should have subtract key', () => {
        // Arrange
        let expectedFunctionName = 'subtract';

        // Act
        let result = Object.keys(calc).includes('subtract');

        // Assert
        expect(result).to.be.true;
    });

    it('Subtract should be a function', () => {
        // Arrange
        let subtractFunction = calc.subtract;

        // Act
        let result = typeof(subtractFunction) === 'function';

        // Assert
        expect(result).to.be.true;
    });

    it('Should have get key', () => {
        // Arrange
        let expectedFunctionName = 'get';

        // Act
        let result = Object.keys(calc).includes('get');

        // Assert
        expect(result).to.be.true;
    });

    it('Get should be a function', () => {
        // Arrange
        let getFunction = calc.get;

        // Act
        let result = typeof(getFunction) === 'function';

        // Assert
        expect(result).to.be.true;
    });


    it('Should add whole positive numbers', () => {
        // Arrange
        let expected = 5;

        // Act
        calc.add(5);
        let result = calc.get();

        // Assert
        expect(result).to.be.equal(expected);
    });

    it('Should add whole negative numbers', () => {
        // Arrange
        let expected = -5;

        // Act
        calc.add(-5);
        let result = calc.get();

        // Assert
        expect(result).to.be.equal(expected);
    });

    it('Should add positive fraction numbers', () => {
        // Arrange
        let expected = 5.55;

        // Act
        calc.add(5.55);
        let result = calc.get();

        // Assert
        expect(result).to.be.equal(expected);
    });

    it('Should add negative fraction numbers', () => {
        // Arrange
        let expected = -5.5;

        // Act
        calc.add(-5.5);
        let result = calc.get();

        // Assert
        expect(result).to.be.equal(expected);
    });

    it('Should subtract whole positive numbers', () => {
        // Arrange
        let expected = -5;

        // Act
        calc.subtract(5);
        let result = calc.get();

        // Assert
        expect(result).to.be.equal(expected);
    });

    it('Should subtract whole negative numbers', () => {
        // Arrange
        let expected = 5;

        // Act
        calc.subtract(-5);
        let result = calc.get();

        // Assert
        expect(result).to.be.equal(expected);
    });

    it('Should subtract positive fraction numbers', () => {
        // Arrange
        let expected = -5.55;

        // Act
        calc.subtract(5.55);
        let result = calc.get();

        // Assert
        expect(result).to.be.equal(expected);
    });

    it('Should subtract negative fraction numbers', () => {
        // Arrange
        let expected = 5.5;

        // Act
        calc.subtract(-5.5);
        let result = calc.get();

        // Assert
        expect(result).to.be.equal(expected);
    });

    it('Should add numbers as string', () => {
        // Arrange
        let expected = 10;

        // Act
        calc.add('10');
        let result = calc.get();

        // Assert
        expect(result).to.be.equal(expected);
    });

    it('Should subtract fraction numbers as string', () => {
        // Arrange
        let expected = -5.5;

        // Act
        calc.subtract('5.5');
        let result = calc.get();

        // Assert
        expect(result).to.be.equal(expected);
    });

    it('Should preserve value', () => {
        // Arrange
        let expected = 3.30;

        // Act
        calc.add(1.1);
        calc.add(1.1);
        calc.add(1.1);
        let result = calc.get();

        // Assert
        expect(result).to.be.closeTo(3.3, 0.01);
    });
});