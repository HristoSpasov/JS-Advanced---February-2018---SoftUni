let expect = require('chai').expect;

require('global-jsdom')();
global.window = window;
global.$ = require('jquery');
document.body.innerHTML = `<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>`;

let sharedObject = require('./objectFunction').sharedObject;

describe('Test object initial state', () => {
    let obj;
    beforeEach(() => {
        obj = sharedObject;
        obj.name = null;
        obj.income = null;
    });

    describe('Check if all properties exist', () => {
        it('Should have name property', () => {
            // Act
            let nameExists = obj.hasOwnProperty('name');

            // Assert
            expect(nameExists).to.be.true;
        });

        it('Should have income property', () => {
            // Act
            let incomeExists = obj.hasOwnProperty('income');

            // Assert
            expect(incomeExists).to.be.true;
        });

        it('Should have changeName property', () => {
            // Act
            let changeNameExists = obj.hasOwnProperty('changeName');

            // Assert
            expect(changeNameExists).to.be.true;
        });

        it('Should have changeIncome property', () => {
            // Act
            let changeIncomeExists = obj.hasOwnProperty('changeIncome');

            // Assert
            expect(changeIncomeExists).to.be.true;
        });

        it('Should have updateName property', () => {
            // Act
            let updateNameExists = obj.hasOwnProperty('updateName');

            // Assert
            expect(updateNameExists).to.be.true;
        });

        it('Should have updateIncome property', () => {
            // Act
            let updateIncomeExists = obj.hasOwnProperty('updateIncome');

            // Assert
            expect(updateIncomeExists).to.be.true;
        });
    });

    describe('Check properties types', () => {
        it('name property should not be a function', () => {
            // Act
            let nameType = typeof(obj.name);

            // Assert
            expect(nameType).to.not.be.equal('function')
        });

        it('income property should not be a function', () => {
            // Act
            let incomeType = typeof(obj.income);

            // Assert
            !expect(incomeType).to.not.be.equal('function');
        });

        it('changeName property should be a function', () => {
            // Act
            let changeNameType = typeof(obj.changeName);

            // Assert
            expect(changeNameType).to.be.equal('function');
        });

        it('changeIncome property should be a function', () => {
            // Act
            let changeIncomeType = typeof(obj.changeIncome);

            // Assert
            expect(changeIncomeType).to.be.equal('function');
        });

        it('updateName property should be a function', () => {
            // Act
            let updateNameType = typeof(obj.updateName);

            // Assert
            expect(updateNameType).to.be.equal('function');
        });

        it('updateIncome property should be a function', () => {
            // Act
            let updateIncomeType = typeof(obj.updateIncome);

            // Assert
            expect(updateIncomeType).to.be.equal('function');
        });
    });

    describe('Check if name and income initial value is null', () => {
        it('Name should have initial value null', () => {
            // Act
            let nameVal = obj.name;

            // Assert
            expect(nameVal).to.be.null;
        });

        it('Income should have initial value null', () => {
            // Act
            let incomeVal = obj.income;

            // Assert
            expect(incomeVal).to.be.null;
        });
    });

    describe('Check changeName functionality', () => {
        it('Should make no changes to name property if input is empty string', () => {
            // Arrange
            let expectedNameValue = null;

            // Act
            obj.changeName('');
            let currentNameValue = obj.name;

            // Assert
            expect(currentNameValue).to.be.equal(expectedNameValue);
        });

        it('Should make no changes to name text box if input is empty string', () => {
            // Arrange
            let nameBox = $('#name');
            let expectedNameValue = '';

            // Act
            obj.changeName('');
            let currentNameValue = nameBox.val();

            // Assert
            expect(currentNameValue).to.be.equal(expectedNameValue);
        });

        it('Should change property name', () => {
            // Arrange
            let name = 'HTS';

            // Act
            obj.changeName(name);
            let currentNameValue = obj.name;

            // Assert
            expect(currentNameValue).to.be.equal(name);
        });

        it('Should change text box name value', () => {
            // Arrange
            let name = 'HTS';

            // Act
            obj.changeName(name);
            let currentNameValue = $('#name').val();

            // Assert
            expect(currentNameValue).to.be.equal(name);
        });
    });

    describe('Check changeIncome functionality', () => {
        it('Should not work with non-number and preserve income property', () => {
            // Arrange
            let expectedIncomeValue = null;
            let input = 'invalid input';

            // Act
            obj.changeIncome(input);
            let currentIncomeValue = obj.income;

            // Assert
            expect(currentIncomeValue).to.be.equal(expectedIncomeValue);
        });

        it('Should not work with fraction numbers and preserve income property', () => {
            // Arrange
            let expectedIncomeValue = null;
            let input = 4.20;

            // Act
            obj.changeIncome(input);
            let currentIncomeValue = obj.income;

            // Assert
            expect(currentIncomeValue).to.be.equal(expectedIncomeValue);
        });

        it('Should not work with negative numbers and preserve income property', () => {
            // Arrange
            let expectedIncomeValue = null;
            let input = -4.20;

            // Act
            obj.changeIncome(input);
            let currentIncomeValue = obj.income;

            // Assert
            expect(currentIncomeValue).to.be.equal(expectedIncomeValue);
        });

        it('Should not work with zero and preserve income property', () => {
            // Arrange
            let expectedIncomeValue = null;
            let input = 0;

            // Act
            obj.changeIncome(input);
            let currentIncomeValue = obj.income;

            // Assert
            expect(currentIncomeValue).to.be.equal(expectedIncomeValue);
        });

        it('Should not work with non-number and preserve income text box', () => {
            // Arrange
            let textBox = $('#income');
            let expectedIncomeValue = '';
            let input = 'invalid input';

            // Act
            obj.changeIncome(input);
            let currentIncomeValue = textBox.val();

            // Assert
            expect(currentIncomeValue).to.be.equal(expectedIncomeValue);
        });

        it('Should not work with fraction numbers and preserve income text box', () => {
            // Arrange
            let textBox = $('#income');
            let expectedIncomeValue = '';
            let input = 4.20;

            // Act
            obj.changeIncome(input);
            let currentIncomeValue = textBox.val();

            // Assert
            expect(currentIncomeValue).to.be.equal(expectedIncomeValue);
        });

        it('Should not work with negative numbers and preserve income text box', () => {
            // Arrange
            let textBox = $('#income');
            let expectedIncomeValue = '';
            let input = -4.20;

            // Act
            obj.changeIncome(input);
            let currentIncomeValue = textBox.val();

            // Assert
            expect(currentIncomeValue).to.be.equal(expectedIncomeValue);
        });

        it('Should not work with zero and preserve income text box', () => {
            // Arrange
            let textBox = $('#income');
            let expectedIncomeValue = '';
            let input = 0;

            // Act
            obj.changeIncome(input);
            let currentIncomeValue = textBox.val();

            // Assert
            expect(currentIncomeValue).to.be.equal(expectedIncomeValue);
        });

        it('Should change income property for valid input', () => {
            // Arrange
            let expectedIncomeValue = 5;
            let input = 5;

            // Act
            obj.changeIncome(input);
            let currentIncomeValue = obj.income;

            // Assert
            expect(currentIncomeValue).to.be.equal(expectedIncomeValue);
        });

        it('Should change income text box for valid input', () => {
            // Arrange
            let textBox = $('#income');
            let expectedIncomeValue = 5;
            let input = 5;

            // Act
            obj.changeIncome(input);
            let currentIncomeValue = textBox.val();

            // Assert
            expect(Number(currentIncomeValue)).to.be.equal(expectedIncomeValue);
        });
    });

    describe('Check updateName functionality', () => {
        it('Should make no changes to name property if name text box is empty', () => {
            // Arrange
            let textBox = $('#name');
            let expected = null;

            // Act
            textBox.val('');
            obj.updateName();
            let currentName = obj.name;

            // Assert
            expect(currentName).to.be.equal(expected);
        });

        it('Should change property name', () => {
            // Arrange
            let textBox = $('#name');
            let expected = 'HTS';

            // Act
            textBox.val('HTS');
            obj.updateName();
            let currentName = obj.name;

            // Assert
            expect(currentName).to.be.equal(expected);
        });
    });

    describe('Check updateIncome functionality', () => {
        it('Should not work with non-number and preserve income property', () => {
            // Arrange
            let expectedIncomeValue = null;
            let incomeBox = $('#income');

            // Act
            incomeBox.val('invalid input');
            obj.updateIncome();
            let currentIncomeValue = obj.income;

            // Assert
            expect(currentIncomeValue).to.be.equal(expectedIncomeValue);
        });

        it('Should not work with fraction numbers and preserve income property', () => {
            // Arrange
            let expectedIncomeValue = null;
            let incomeBox = $('#income');

            // Act
            incomeBox.val('4.20');
            obj.updateIncome();
            let currentIncomeValue = obj.income;

            // Assert
            expect(currentIncomeValue).to.be.equal(expectedIncomeValue);
        });

        it('Should not work with negative numbers and preserve income property', () => {
            // Arrange
            let expectedIncomeValue = null;
            let incomeBox = $('#income');

            // Act
            incomeBox.val('-4.20');
            obj.updateIncome();
            let currentIncomeValue = obj.income;

            // Assert
            expect(currentIncomeValue).to.be.equal(expectedIncomeValue);
        });

        it('Should not work with 0 and preserve income property', () => {
            // Arrange
            let expectedIncomeValue = null;
            let incomeBox = $('#income');

            // Act
            incomeBox.val(0);
            obj.updateIncome();
            let currentIncomeValue = obj.income;

            // Assert
            expect(currentIncomeValue).to.be.equal(expectedIncomeValue);
        });

        it('Should change income property for valid input', () => {
            // Arrange
            let expectedIncomeValue = 5;
            let incomeBox = $('#income');

            // Act
            incomeBox.val('5');
            obj.updateIncome();
            let currentIncomeValue = obj.income;

            // Assert
            expect(currentIncomeValue).to.be.equal(expectedIncomeValue);
        });
    });
});