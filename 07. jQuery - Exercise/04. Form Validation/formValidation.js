function validate() {
    // Patterns
    let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
    let passwordPattern = /^\w{5,15}$/;
    let emailPattern = /^.*@.*\..*$/;
    let companyNumberPattern = /^[1-9][0-9]{3}$/;

    // Events
    let isCompanyChecked = $('#company').change(showRemoveCompanyInfo);
    let submit = $('#submit').click(submitForm);

    function submitForm(event) {
        event.preventDefault();
        let formIsValid = true;

        // Get user input
        let usernameInput = $('#username');
        let emailInput = $('#email');
        let passwordInput = $('#password');
        let confirmPasswordInput = $('#confirm-password');
        let companyInfoInput;

        // Check if is valid
        if(!usernamePattern.test(usernameInput.val())) {
            $(usernameInput).prop('style', 'border-color: red');
            formIsValid = false;
        } else {
            $(usernameInput).prop('style', '');
        }

        if(!emailPattern.test(emailInput.val())) {
            $(emailInput).prop('style', 'border-color: red');
            formIsValid = false;
        } else {
            $(emailInput).prop('style', '');
        }

        if(!passwordPattern.test(passwordInput.val()) ||
            !passwordPattern.test(confirmPasswordInput.val()) ||
            passwordInput.val().length !== confirmPasswordInput.val().length) {
            $(passwordInput).prop('style', 'border-color: red');
            $(confirmPasswordInput).prop('style', 'border-color: red');
            formIsValid = false;
        } else {
            $(passwordInput).prop('style', '');
            $(confirmPasswordInput).prop('style', '');
        }

        if($('#company').is(':checked')){
            companyInfoInput = $('#companyNumber');
            if(!companyNumberPattern.test(companyInfoInput.val())) {
                $(companyInfoInput).prop('style', 'border-color: red');
                formIsValid = false;
            } else {
                $(companyInfoInput).prop('style', '');
            }
        }

        // Display div if all form fields are valid
        let validFormDiv = $('#valid');
        if(formIsValid){
            validFormDiv.css('display', 'block');
        } else {
            validFormDiv.css('display', 'none');
        }
    }

    function showRemoveCompanyInfo() {
        let companyInfoField = $('#companyInfo');
        if(this.checked){
            companyInfoField.prop('style', 'display: block');
        } else {
            companyInfoField.prop('style', 'display: none');
        }
    }
}
