let mathEnforcer = require('./mathEnforcer').mathEnforcer;
let expect = require('chai').expect;

describe('Test math enforcer functionality', () => {
    describe('Test all properties', () => {
        it('Should have addFive property', () => {
            // Act
            let result = mathEnforcer.hasOwnProperty('addFive');

            // Assert
            expect(result).to.be.true;
        });

        it('addFive property should be a function', () => {
            // Act
            let result = typeof(mathEnforcer.addFive);

            // Assert
            expect(result).to.be.equal('function');
        });

        it('Should have subtractTen property', () => {
            // Act
            let result = mathEnforcer.hasOwnProperty('subtractTen');

            // Assert
            expect(result).to.be.true;
        });

        it('subtractTen property should be a function', () => {
            // Act
            let result = typeof(mathEnforcer.subtractTen);

            // Assert
            expect(result).to.be.equal('function');
        });

        it('Should have sum property', () => {
            // Act
            let result = mathEnforcer.hasOwnProperty('sum');

            // Assert
            expect(result).to.be.true;
        });

        it('sum property should be a function', () => {
            // Act
            let result = typeof(mathEnforcer.sum);

            // Assert
            expect(result).to.be.equal('function');
        });

    });

    describe('Test addFive function', () => {
        describe('Shuold return undefined for invalid input data types', () => {
            it('Should return undefined for string', () => {
                // Arrange
                let input = 'string input';
                let expected = undefined;

                // Act
                let result = mathEnforcer.addFive(input);

                // Assert
                expect(result).to.be.equal(expected);
            });

            it('Should return undefined for object', () => {
                // Arrange
                let input = {obj: 'object'};
                let expected = undefined;

                // Act
                let result = mathEnforcer.addFive(input);

                // Assert
                expect(result).to.be.equal(expected);
            });
        });

        describe('Shuold return correct result for valid input data types', () => {
            it('Should work with positive whole numbers', () => {
                // Arrange
                let input = 5;
                let expected = 10;

                // Act
                let result = mathEnforcer.addFive(input);

                // Assert
                expect(result).to.be.equal(expected);
            });

            it('Should work with negative whole numbers', () => {
                // Arrange
                let input = -15;
                let expected = -10;

                // Act
                let result = mathEnforcer.addFive(input);

                // Assert
                expect(result).to.be.equal(expected);
            });

            it('Should work with positive fraction numbers', () => {
                // Arrange
                let input = 5.144;
                let expected = 10.144;

                // Act
                let result = mathEnforcer.addFive(input);

                // Assert
                expect(result).to.be.closeTo(expected, 0.01);
            });

            it('Should work with negative fraction numbers', () => {
                // Arrange
                let input = -5.144;
                let expected = -0.144;

                // Act
                let result = mathEnforcer.addFive(input);

                // Assert
                expect(result).to.be.closeTo(expected, 0.01);
            });

        });
    });

    describe('Test subtractTen function', () => {
        describe('Shuold return undefined for invalid input data types', () => {
            it('Should return undefined for string', () => {
                // Arrange
                let input = 'string input';
                let expected = undefined;

                // Act
                let result = mathEnforcer.subtractTen(input);

                // Assert
                expect(result).to.be.equal(expected);
            });

            it('Should return undefined for object', () => {
                // Arrange
                let input = {obj: 'object'};
                let expected = undefined;

                // Act
                let result = mathEnforcer.subtractTen(input);

                // Assert
                expect(result).to.be.equal(expected);
            });
        });

        describe('Shuold return correct result for valid input data types', () => {
            it('Should work with positive whole numbers', () => {
                // Arrange
                let input = 5;
                let expected = -5;

                // Act
                let result = mathEnforcer.subtractTen(input);

                // Assert
                expect(result).to.be.equal(expected);
            });

            it('Should work with negative whole numbers', () => {
                // Arrange
                let input = -15;
                let expected = -25;

                // Act
                let result = mathEnforcer.subtractTen(input);

                // Assert
                expect(result).to.be.equal(expected);
            });

            it('Should work with positive fraction numbers', () => {
                // Arrange
                let input = 5.144;
                let expected = -4.856;

                // Act
                let result = mathEnforcer.subtractTen(input);

                // Assert
                expect(result).to.be.closeTo(expected, 0.01);
            });

            it('Should work with negative fraction numbers', () => {
                // Arrange
                let input = -5.144;
                let expected = -15.144;

                // Act
                let result = mathEnforcer.subtractTen(input);

                // Assert
                expect(result).to.be.closeTo(expected, 0.01);
            });

        });
    });

    describe('Test sum function', () => {
        describe('Shuold return undefined for invalid input data types', () => {
            it('Should return undefined for string for num1 input', () => {
                // Arrange
                let input = 'string input';
                let expected = undefined;

                // Act
                let result = mathEnforcer.sum(input, 5);

                // Assert
                expect(result).to.be.equal(expected);
            });

            it('Should return undefined for object for num1 input', () => {
                // Arrange
                let input = {obj: 'object'};
                let expected = undefined;

                // Act
                let result = mathEnforcer.sum(input, 5);

                // Assert
                expect(result).to.be.equal(expected);
            });

            it('Should return undefined for string for num2 input', () => {
                // Arrange
                let input = 'string input';
                let expected = undefined;

                // Act
                let result = mathEnforcer.sum(5, input);

                // Assert
                expect(result).to.be.equal(expected);
            });

            it('Should return undefined for object for num2 input', () => {
                // Arrange
                let input = {obj: 'object'};
                let expected = undefined;

                // Act
                let result = mathEnforcer.sum(5, input);

                // Assert
                expect(result).to.be.equal(expected);
            });
        });

        describe('Shuold return correct result for valid input data types', () => {
            it('Should work with positive whole numbers', () => {
                // Arrange
                let num1 = 5;
                let num2 = 5;
                let expected = 10;

                // Act
                let result = mathEnforcer.sum(num1, num2);

                // Assert
                expect(result).to.be.equal(expected);
            });

            it('Should work with negative whole numbers', () => {
                // Arrange
                let num1 = -5;
                let num2 = -10;
                let expected = -15;

                // Act
                let result = mathEnforcer.sum(num1, num2);

                // Assert
                expect(result).to.be.equal(expected);
            });

            it('Should work with positive fraction numbers', () => {
                // Arrange
                let num1 = 5.61;
                let num2 = 5.10;
                let expected = 10.71;

                // Act
                let result = mathEnforcer.sum(num1, num2);

                // Assert
                expect(result).to.be.closeTo(expected, 0.01);
            });

            it('Should work with negative fraction numbers', () => {
                // Arrange
                let num1 = -5.144;
                let num2 = -2.101;
                let expected = -7.245;

                // Act
                let result = mathEnforcer.sum(num1, num2);

                // Assert
                expect(result).to.be.closeTo(expected, 0.01);
            });

            it('Should work with mixed numbers', () => {
                // Arrange
                let num1 = 5;
                let num2 = -2.101;
                let expected = 2.899;

                // Act
                let result = mathEnforcer.sum(num1, num2);

                // Assert
                expect(result).to.be.closeTo(expected, 0.01);
            });
        });
    });
});