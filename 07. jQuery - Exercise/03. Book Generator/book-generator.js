function createBook(selector, title, author, ISBN) {
    let currentDivsCount = $(selector).find('div').toArray().length;

    // Create book div
    let newBook = $('<div>');
    newBook.prop('id', `book${currentDivsCount + 1}`);
    newBook.prop('style', '');
    newBook.append($('<p>').addClass('title').text(title)); // Append title paragraph
    newBook.append($('<p>').addClass('author').text(author)); // Append author paragraph
    newBook.append($('<p>').addClass('isbn').text(ISBN)); // Append ISBN paragraph

    newBook.append($('<button>').text('Select').click(select)); // Add select button
    newBook.append($('<button>').text('Deselect').click(deSelect)); // Add deselect button

    $(selector).append(newBook); // Append new book to selector

    function select() {
        let parent = $(this).parent();
        parent.prop('style', 'border: 2px solid blue');
    }

    function deSelect() {
        let parent = $(this).parent();
        parent.prop('style', '');
    }
}