function increment(selector) {
    // Create elements
    $('<textarea>').addClass('counter').prop('disabled', true).val(0).appendTo($(selector));
    $('<button>').addClass('btn').prop('id', 'incrementBtn').text('Increment').appendTo($(selector));
    $('<button>').addClass('btn').prop('id', 'addBtn').text('Add').appendTo($(selector));
    $('<ul>').addClass('results').appendTo($(selector));

    // Events
    $('#incrementBtn').click(() => {
        let area = $('textarea.counter');
        $(area).val(Number($(area).val()) + 1);
    });

    $('#addBtn').click(() => {
        $('<li>').text(Number($('textarea.counter').val())).appendTo($('ul.results'));
    });
}