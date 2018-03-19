function attachEventsListeners() {
    let buttons = document.querySelectorAll('div input:last-child');

    // Add click events on each
    for (let btn of buttons) {
        btn.addEventListener('click', btnClicked);
    }

    function btnClicked(event) {
        let numBox = event.target.parentNode.children[1];

        if (isNaN(numBox.value)) return; // Check if input is a valid number

        let type = numBox.id; // Get btn type => seconds, minutes, hours or days

        let parsed = Number(numBox.value);

        // Convert to seconds
        let inputSeconds = undefined;

        switch (type) {
            case 'days':
                inputSeconds = parsed * 24 * 60 * 60;
                break;
            case 'hours':
                inputSeconds = parsed * 60 * 60;
                break;
            case 'minutes':
                inputSeconds = parsed * 60;
                break;
            case 'seconds':
                inputSeconds = parsed;
                break;
        }

        // Update values
        for (let btn of buttons) {
            let t = btn.parentNode.children[1].id;
            let val = btn.parentNode.children[1];

            switch (t) {
                case 'days':
                    val.value = inputSeconds / 24 / 60 / 60;
                    break;
                case 'hours':
                    val.value = inputSeconds / 60 / 60;
                    break;
                case 'minutes':
                    val.value = inputSeconds / 60;
                    break;
                case 'seconds':
                    val.value = inputSeconds;
                    break;
            }
        }
    }
}