function attachEvents() {
    let lis = $('ul#items li');

    for (let li of lis) {
        $('li').click(markUnmark);
    }

    $('#showTownsButton').click(countSelected);

    function countSelected() {
        let selected = $('ul#items').find('li[data-selected=true]').toArray().map(e => $(e).text()).join(', ');
        $('#selectedTowns').text('Selected towns: ' + selected);
    }

    function markUnmark() {
        if(!$(this).attr('data-selected')){
            $(this).attr('data-selected', true);
            $(this).css('background', '#DDD');
        } else {
            $(this).removeAttr('data-selected');
            $(this).css('background', '');
        }
    }
}
