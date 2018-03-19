let expect = require('chai').expect;
let nuke = require('./nuke').nuke;

require('global-jsdom')();
global.window = window;
global.$ = require('jquery');

describe('Test nuke function', () => {
    beforeEach(() => {
       let htmlString = '<div id="target"><div class="nested target"><p>This is some text</p></div><div class="target"><p>Empty div</p></div><div class="inside"><span class="nested">Some more text</span><span class="target">Some more text</span></div></div>';
       $('body').html(htmlString);
    });

    describe('Test invalid cases', () => {
        it('Should do nothing if both selectors are equal.', () => {
            // Arrange
            let initialHtml = $('body').html();
            let firstSelector = '#target';
            let secondSelector = '#target';

            // Act
            nuke(firstSelector, secondSelector);
            let resultHtml = $('body').html();

            // Assert
            expect(initialHtml).to.be.equal(resultHtml, 'If both selectors are equal function should not modify HTML!');
        });

        it('Should do nothing if first selector is omitted.', () => {
            // Arrange
            let initialHtml = $('body').html();
            let firstSelector = '';
            let secondSelector = '#target';

            // Act
            nuke(firstSelector, secondSelector);
            let resultHtml = $('body').html();

            // Assert
            expect(initialHtml).to.be.equal(resultHtml, 'If first selector is missing function should not modify HTML!');
        });

        it('Should do nothing if second selector is omitted.', () => {
            // Arrange
            let initialHtml = $('body').html();
            let firstSelector = '#target';
            let secondSelector = '';

            // Act
            nuke(firstSelector, secondSelector);
            let resultHtml = $('body').html();

            // Assert
            expect(initialHtml).to.be.equal(resultHtml, 'If second selector is missing function should not modify HTML!');
        });

        it('Should do nothing if first selector is not existing.', () => {
            // Arrange
            let initialHtml = $('body').html();
            let firstSelector = '.invalidSelector';
            let secondSelector = '#target';

            // Act
            nuke(firstSelector, secondSelector);
            let resultHtml = $('body').html();

            // Assert
            expect(initialHtml).to.be.equal(resultHtml, 'If first selector is not existing function should not modify HTML!');
        });

        it('Should do nothing if second selector is not existing.', () => {
            // Arrange
            let initialHtml = $('body').html();
            let firstSelector = '#target';
            let secondSelector = '.invalidSelector';

            // Act
            nuke(firstSelector, secondSelector);
            let resultHtml = $('body').html();

            // Assert
            expect(initialHtml).to.be.equal(resultHtml, 'If second selector is not existing function should not modify HTML!');
        });
    });

    describe('Test valid cases', () => {
        it('Should delete all html for (div, #target)', () => {
            // Arrange
            let firstSelector = 'div';
            let secondSelector = '#target';
            let expectedHtml = '';

            // Act
            nuke(firstSelector, secondSelector);
            let resultHtml = $('body').html();

            // Assert
            expect(resultHtml).to.be.equal(expectedHtml);
        });

        it('Should delete single span from (span, .target)', () => {
            // Arrange
            let firstSelector = 'span';
            let secondSelector = '.target';
            let expectedHtml = '<div id="target"><div class="nested target"><p>This is some text</p></div><div class="target"><p>Empty div</p></div><div class="inside"><span class="nested">Some more text</span></div></div>';

            // Act
            nuke(firstSelector, secondSelector);
            let resultHtml = $('body').html();

            // Assert
            expect(resultHtml).to.be.equal(expectedHtml);
        });

        it("Should delete div with class .target ('div', '.target')", () => {
            // Arrange
            let firstSelector = 'div';
            let secondSelector = '.target';
            let expectedHtml = '<div id="target"><div class="inside"><span class="nested">Some more text</span><span class="target">Some more text</span></div></div>';

            // Act
            nuke(firstSelector, secondSelector);
            let resultHtml = $('body').html();

            // Assert
            expect(resultHtml).to.be.equal(expectedHtml);
        });
    });
});
