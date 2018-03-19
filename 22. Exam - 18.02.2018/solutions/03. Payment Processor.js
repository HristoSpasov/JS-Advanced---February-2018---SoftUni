class PaymentProcessor {
    constructor(inputOptions){
        this.options = {
            types: ["service", "product", "other"],
            precision: 2
        };

        this.setOptions(inputOptions);
        this.payments = [];
    }

    registerPayment(id, name, type, value){
        if(typeof id !== 'string'){
            throw new TypeError('invalid type');
        }

        if(id.length === 0){
            throw new Error('Id cannot have zero length');
        }

        if(typeof name !== 'string'){
            throw new TypeError('invalid type');
        }

        if(name.length === 0){
            throw new Error('name cannot have zero length');
        }

        if(typeof value !== 'number'){
            throw new Error('value should be a number');
        }

        if(!this.options.types.includes(type)){
            throw new Error('Type is not in valid types list');
        }

        if(this.payments.filter(p => p.Id === id).length !== 0){
            throw new Error('id already exists');
        }

        let newPayment = {Id:id, Name:name, Type:type, Value: Number(value)};
        this.payments.push(newPayment);
    }

    deletePayment(id){
        if(this.payments.filter(p => p.Id === id).length === 0){
            throw new Error('id does not exist');
        }

        this.payments = this.payments.filter(p => p.Id !== id);
    }

    get(id){
        if(this.payments.filter(p => p.Id === id).length === 0){
            throw new Error('id does not exist');
        }

        let o = this.payments.filter(p => p.Id === id)[0];

        return `Details about payment ID: ${o.Id}\n- Name: ${o.Name}\n- Type: ${o.Type}\n- Value: ${o.Value.toFixed(this.options.precision)}`;
    }

    setOptions(options){
        if(options !== undefined){
            if(options.types){
                this.options.types = options.types;
            }

            if(options.precision){
                this.options.precision = options.precision;
            }
        }
    }

    toString(){
        let balance = this.payments.length > 0 ? this.payments.map(e => e.Value).reduce((a, b) => a + b) : 0;
        return `Summary:\n- Payments: ${this.payments.length}\n- Balance: ${balance.toFixed(this.options.precision)}`;
    }
}

// // Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());
//
// // Should throw an error (invalid type)
//generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);
// //
generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);
// //
// // // Should throw an error (ID not found)
// //generalPayments.deletePayment('E027');
// // // Should throw an error (ID not found)
// // generalPayments.get('E027');
// //
generalPayments.deletePayment('E028');
console.log(generalPayments.toString());
// //
// Initialize processor with custom types
// const servicePyaments = new PaymentProcessor({types: ['service']});
// servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
// servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
// console.log(servicePyaments.toString());
//
// // Initialize processor with custom precision
// const transactionLog = new PaymentProcessor({precision: 5});
// transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
// console.log(transactionLog.toString());
