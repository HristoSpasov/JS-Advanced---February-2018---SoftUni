let rgbToHexColor = require('./rgbToHex.js').rgbToHexColor;
let expect = require('chai').expect;

describe('Test function', () => {
    describe('Valid cases', () => {
        it('Test with (0, 0, 0)', () =>{
            // Arrange
            let red = 0;
            let green = 0;
            let blue = 0;
            let expected = '#000000';

            // Act
            let result = rgbToHexColor(red, green, blue);

            // Assert
            expect(result).to.equal(expected);
        });

        it('Test with (255, 255, 255)', () =>{
            // Arrange
            let red = 255;
            let green = 255;
            let blue = 255;
            let expected = '#FFFFFF';

            // Act
            let result = rgbToHexColor(red, green, blue);

            // Assert
            expect(result).to.equal(expected);
        });

        it('Test with (12, 13, 14)', () =>{
            // Arrange
            let red = 12;
            let green = 13;
            let blue = 14;
            let expected = '#0C0D0E';

            // Act
            let result = rgbToHexColor(red, green, blue);

            // Assert
            expect(result).to.equal(expected);
        });

        it('Test with (255, 158, 170)', () =>{
            // Arrange
            let red = 255;
            let green = 158;
            let blue = 170;
            let expected = '#FF9EAA';

            // Act
            let result = rgbToHexColor(red, green, blue);

            // Assert
            expect(result).to.equal(expected);
        });
    });

    describe('Invalid cases return undefined', () => {
        it('Red is a number', () => {
            // Arrange
            let redValue = 'invalid';

            // Act
            let result = rgbToHexColor(redValue, 0, 0);

            // Assert
            expect(result).to.equal(undefined);
        });

        it('Red is a whole number', () => {
             // Arrange
            let redValue = 2.53;

            // Act
            let result = rgbToHexColor(redValue, 0, 0);

            // Assert
            expect(result).to.equal(undefined);
        });

        it('Green is a number', () => {
            // Arrange
            let greenValue = 'invalid';

            // Act
            let result = rgbToHexColor(0, greenValue, 0);

            // Assert
            expect(result).to.equal(undefined);
        });

        it('Green is a whole number', () => {
            // Arrange
            let greenValue = 2.53;

            // Act
            let result = rgbToHexColor(0, greenValue, 0);

            // Assert
            expect(result).to.equal(undefined);
        });

        it('Blue is a number', () => {
            // Arrange
            let blueValue = 'invalid';

            // Act
            let result = rgbToHexColor(0, 0, blueValue);

            // Assert
            expect(result).to.equal(undefined);
        });

        it('Blue is a whole number', () => {
            // Arrange
            let blueValue = 2.53;

            // Act
            let result = rgbToHexColor(0, 0, blueValue);

            // Assert
            expect(result).to.equal(undefined);
        });

        it('Red is below zero', () => {
            // Arrange
            let redValue = -5;

            // Act
            let result = rgbToHexColor(redValue, 0, 0);

            // Assert
            expect(result).to.equal(undefined);
        });

        it('Red is above 255', () => {
            // Arrange
            let redValue = 256;

            // Act
            let result = rgbToHexColor(redValue, 0, 0);

            // Assert
            expect(result).to.equal(undefined);
        });

        it('Green is below zero', () => {
            // Arrange
            let greenValue = -1;

            // Act
            let result = rgbToHexColor(0, greenValue, 0);

            // Assert
            expect(result).to.equal(undefined);
        });

        it('Green is a above 255', () => {
            // Arrange
            let greenValue = 256;

            // Act
            let result = rgbToHexColor(0, greenValue, 0);

            // Assert
            expect(result).to.equal(undefined);
        });

        it('Blue is below zero', () => {
            // Arrange
            let blueValue = -1;

            // Act
            let result = rgbToHexColor(0, 0, blueValue);

            // Assert
            expect(result).to.equal(undefined);
        });

        it('Blue is above 255', () => {
            // Arrange
            let blueValue = 256;

            // Act
            let result = rgbToHexColor(0, 0, blueValue);

            // Assert
            expect(result).to.equal(undefined);
        });

        it('Red is undefined', () => {
            // Arrange
            let redValue = undefined;

            // Act
            let result = rgbToHexColor(redValue, 0, 0);

            // Assert
            expect(result).to.equal(undefined);
        });

        it('Green is undefined', () => {
            // Arrange
            let greenValue = undefined;

            // Act
            let result = rgbToHexColor(0, greenValue, 0);

            // Assert
            expect(result).to.equal(undefined);
        });

        it('Blue is undefined', () => {
            // Arrange
            let blueValue = undefined;

            // Act
            let result = rgbToHexColor(0, 0, blueValue);

            // Assert
            expect(result).to.equal(undefined);
        });
    });
});