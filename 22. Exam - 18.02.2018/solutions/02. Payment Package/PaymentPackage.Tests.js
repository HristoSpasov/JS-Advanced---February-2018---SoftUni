let PaymentPackage = require('./PaymentPackage');
let expect = require('chai').expect;

describe('Test payment package functionality', () => {
    //let package;

    //beforeEach(() => package = new PaymentPackage('test', 100));

    describe('Test constructor', () => {
        it('Should create instance with valid data', () => {
            // Arrange
            let name = 'test';
            let value = 100;

            // Act
            let p = new PaymentPackage(name, value);

            // Assert
            expect(p._name).to.be.equal(name);
            expect(p._value).to.be.equal(value);
            expect(p._VAT).to.be.equal(20);
            expect(p._active).to.be.equal(true);
        });

        it('Should create instance with valid data where value is zero', () => {
            // Arrange
            let name = 'test';
            let value = 0;

            // Act
            let p = new PaymentPackage(name, value);

            // Assert
            expect(p._name).to.be.equal(name);
            expect(p._value).to.be.equal(value);
            expect(p._VAT).to.be.equal(20);
            expect(p._active).to.be.equal(true);
        });

        it('Should create instance with valid data, but more than 2 constructor args', () => {
            // Arrange
            let name = 'test';
            let value = 100;
            let thirdArg = 'unknownX';

            // Act
            let p = new PaymentPackage(name, value, thirdArg);

            // Assert
            expect(p._name).to.be.equal(name);
            expect(p._value).to.be.equal(value);
            expect(p._VAT).to.be.equal(20);
            expect(p._active).to.be.equal(true);
        });

        it('Should throw error if input is not of string type', () => {
            // Arrange
            let name = {};
            let value = 100;

            // Assert
            expect(() => new PaymentPackage(name, value)).to.be.throw(Error);
        });

        it('Should throw error if empty name string is passed', () => {
            // Arrange
            let name = '';
            let value = 100;

            // Assert
            expect(() => new PaymentPackage(name, value)).to.be.throw(Error);
        });

        it('Should throw error if input for value is not of number type', () => {
            // Arrange
            let name = 'test';
            let value = {};

            // Assert
            expect(() => new PaymentPackage(name, value)).to.be.throw(Error);
        });

        it('Should throw error if input for value is negative', () => {
            // Arrange
            let name = 'test';
            let value = -10;

            // Assert
            expect(() => new PaymentPackage(name, value)).to.be.throw(Error);
        });
    });

    describe('Test all getters', () => {
        it('Should return correct data', () => {
            // Arrange
            let name = 'test';
            let value = 100;

            // Act
            let p = new PaymentPackage(name, value);

            // Assert
            expect(p.name).to.be.equal(name);
            expect(p.value).to.be.equal(value);
            expect(p.VAT).to.be.equal(20);
            expect(p.active).to.be.equal(true);
        });
    });

    describe('Test all setters with valid data', () => {
        it('Should set everything correctly correctly', () => {
            // Arrange
            let name = 'test';
            let value = 100;

            let newName = 'newName';
            let newValue = 1000;
            let newVat = 10;
            let newActive = false;


            // Act
            let p = new PaymentPackage(name, value);
            p.name = newName;
            p.value = newValue;
            p.VAT = newVat;
            p.active = newActive;

            // Assert
            expect(p._name).to.be.equal(newName);
            expect(p._value).to.be.equal(newValue);
            expect(p._VAT).to.be.equal(newVat);
            expect(p._active).to.be.equal(newActive);
        });
    });

    describe('Test all setters with invalid data', () => {
        it('Should set everything correctly correctly', () => {
            // Arrange
            let name = 'test';
            let value = 100;

            let newName = '';
            let newValue = -10;
            let newVat = -5;
            let newActive = {};

            // Act
            let p = new PaymentPackage(name, value);

            // Assert
            expect(() => p.name = newName).to.be.throw(Error);
            expect(() => p.value = newValue).to.be.throw(Error);
            expect(() => p.VAT = newVat).to.be.throw(Error);
            expect(() => p.active = newActive).to.be.throw(Error);
        });
    });

    describe('Test toString() function ', () => {
        it('Should return correct string if is active', () => {
            // Arrange
            let name = 'HR Services';
            let value = 1500;
            let expected = `Package: HR Services
- Value (excl. VAT): 1500
- Value (VAT 20%): 1800`;

            // Act
            let p = new PaymentPackage(name, value);

            // Assert
            expect(p.toString()).to.be.equal(expected);
        });

        it('Should return correct string if is active', () => {
            // Arrange
            let name = 'HR Services';
            let value = 1500;
            let expected = `Package: HR Services (inactive)
- Value (excl. VAT): 1500
- Value (VAT 20%): 1800`;

            // Act
            let p = new PaymentPackage(name, value);
            p.active = false;

            // Assert
            expect(p.toString()).to.be.equal(expected);
        });
    });

    describe('Test prototype', () => {
        let p;

        beforeEach(() => p = new PaymentPackage('test', 1500));

        it('Should have all properties', () => {
            expect(Object.getPrototypeOf(p).hasOwnProperty('name')).to.be.equal(true);
            expect(Object.getPrototypeOf(p).hasOwnProperty('value')).to.be.equal(true);
            expect(Object.getPrototypeOf(p).hasOwnProperty('VAT')).to.be.equal(true);
            expect(Object.getPrototypeOf(p).hasOwnProperty('active')).to.be.equal(true);
            expect(Object.getPrototypeOf(p).hasOwnProperty('toString')).to.be.equal(true);
        })
    });
});