function attachEvents() {
    let buttons = $('a.button'); // All buttons

    for (let b of buttons) {
        $(b).click(markClicked);
    }

    function markClicked() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}