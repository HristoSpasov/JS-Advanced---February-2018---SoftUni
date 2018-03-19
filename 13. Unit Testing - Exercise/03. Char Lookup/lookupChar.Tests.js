let lookupChar = require('./loockupChar.js').lookupChar;
let expect = require('chai').expect;

describe('Test function', () => {
   describe('Test for invalid input types', () => {
      it('First parameter should be string', () => {
           // Arrange
           let input = 11;
           let expected = undefined;

           // Act
           let result = lookupChar(input, 0);

           // Assert
           expect(result).to.be.equal(expected);
       });

       it('Second parameter should be number', () => {
           // Arrange
           let input = '11';
           let expected = undefined;

           // Act
           let result = lookupChar('random string', input);

           // Assert
           expect(result).to.be.equal(expected);
       });

       it('Second parameter should not be fraction number', () => {
           // Arrange
           let input = 4.20;
           let expected = undefined;

           // Act
           let result = lookupChar('random string', input);

           // Assert
           expect(result).to.be.equal(expected);
       });
   });

   describe('Test index bounds', () => {
      it('Index should be >= 0', () => {
          // Arrange
          let string = 'Test string';
          let index = -1;
          let expected = 'Incorrect index';

          // Act
          let result = lookupChar(string, index);

          // Assert
          expect(result).to.be.equal(expected);
      });

       it('Index should less than string length', () => {
           // Arrange
           let string = 'Test string';
           let index = 11;
           let expected = 'Incorrect index';

           // Act
           let result = lookupChar(string, index);

           // Assert
           expect(result).to.be.equal(expected);
       });

       it('Test with empty string', () => {
           // Arrange
           let string = '';
           let index = 0;
           let expected = 'Incorrect index';

           // Act
           let result = lookupChar(string, index);

           // Assert
           expect(result).to.be.equal(expected);
       });
   });

    describe('Test with valid data', () => {
        it('Test first char', () => {
            // Arrange
            let string = 'Test string';
            let index = 0;
            let expected = 'T';

            // Act
            let result = lookupChar(string, index);

            // Assert
            expect(result).to.be.equal(expected);
        });

        it('Test last char', () => {
            // Arrange
            let string = 'Test string';
            let index = 10;
            let expected = 'g';

            // Act
            let result = lookupChar(string, index);

            // Assert
            expect(result).to.be.equal(expected);
        });
    });
});