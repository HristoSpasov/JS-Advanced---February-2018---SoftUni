class Textbox {
    constructor(selector, regex){
        this.selector = selector;
        this._invalidSymbols = regex;
        this._elements = $(this.selector);
        $(this.selector).on('input', function () {
            $('*[type=text]').val(this.value);
            console.log(this.value);
        });
    }

    get value() {
        return this.elements.val();
    }

    set value(value) {
        this.elements.val(value);
    }

    get elements() {
        return this._elements;
    }

    isValid(){
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
//let inputs = $('.textbox');
//
// inputs.on('input',function(){console.log(textbox.value);});
