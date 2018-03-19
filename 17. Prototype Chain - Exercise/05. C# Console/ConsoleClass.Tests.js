let expect = require('chai').expect;
let Console = require('./ConsoleClass.js').Console;

describe('Test C# Console.WriteLine',() => {
    it('Should return string for single string', () => {
        // Arrange
        let input = 'Single string';
        let expected = 'Single string';

        // Act
        let result = Console.writeLine(input);

        // Assert
        expect(result).to.be.equal(expected, 'Should return single string if only one string is passed to writeline method!');
    });

    it('Should return JSON for single object', () => {
        // Arrange
        let input = {TestParam1: 'Result1', TestParam2: 'Result2'};
        let expected = JSON.stringify(input);

        // Act
        let result = Console.writeLine(input);

        // Assert
        expect(result).to.be.equal(expected, 'Should return JSON if only one object is passed to writeline method!');
    });

    it('Should throw type error for many params input if the first input is not a string', () => {
        // Arrange
        let input1 = {NotValid: 'First element should be a string'};
        let input2 = 'Second param does not matter if first is not a string';

        // Assert
        expect(() => Console.writeLine(input1, input2)).to.throw(TypeError);
    });

    it('Should throw type error for no input', () => {
        // Assert
        expect(() => Console.writeLine()).to.throw(TypeError);
    });

    it('Should throw RangeError if number of parameters does not correspond to number of placeholders', () => {
        // Arrange
        let templateString = 'The sum of {0} and {1} is {2}';
        let placeholder0 = 3;
        let placeholder1 = 4;

        // Assert
        expect(() => Console.writeLine(templateString, placeholder0, placeholder1)).to.be.throw(RangeError);
    });

    it('Should throw RangeError if invalid placeholder number is passed', () => {
        // Arrange
        let templateString = 'The sum of {0} and {1} is {22}';
        let placeholder0 = 3;
        let placeholder1 = 4;
        let placeholder2 = 7;

        // Assert
        expect(() => Console.writeLine(templateString, placeholder0, placeholder1)).to.be.throw(RangeError);
    });

    it('Should work for valid data', () => {
        // Arrange
        let templateString = 'The sum of {0} and {1} is {2}';
        let placeholder0 = 3;
        let placeholder1 = 4;
        let placeholder2 = 7;
        let expected = 'The sum of 3 and 4 is 7';

        // Act
        let result = Console.writeLine(templateString, placeholder0, placeholder1, placeholder2);

        // Assert
        expect(result).to.be.equal(expected);
    });

});