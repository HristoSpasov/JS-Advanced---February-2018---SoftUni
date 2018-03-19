let result = (function () {

    class Textbox {
        constructor(selector, regex) {
            this.selector = selector;
            this._invalidSymbols = regex;
            this._elements = $(this.selector);
            let that = this;
            $(this.selector).on('input', function () {
                that.value = this.value;
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

        isValid() {
            return !this._invalidSymbols.test(this.value);
        }
    }

    class Form {
        constructor(...textBoxOjects) {
            if (textBoxOjects.every(tb => tb instanceof Textbox)) {
                this._element = $('<div>').addClass('form');
                this._textboxes = textBoxOjects;
                this._textboxes.forEach(e => this._element.append($(e.selector)));

            } else {
                throw new Error('Some of the passed in objects are not texboxes');
            }
        }

        submit() {
            let allAreValid = true;
            this._textboxes.forEach(textbox => {
                if (textbox.isValid()) {
                    $(textbox.selector).css('border', '2px solid green');
                } else {
                    $(textbox.selector).css('border', '2px solid red');
                    allAreValid = false;
                }
            });

            return allAreValid;
        }

        attach(selector) {
            $(selector).append($(this._element));
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username", /[^a-zA-Z0-9]/);
let password = new Textbox("#password", /[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username, password);
form.attach("#root");
