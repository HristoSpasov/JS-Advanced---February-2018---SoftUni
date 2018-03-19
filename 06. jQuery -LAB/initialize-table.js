function initializeTable() {
    seedData(); // Seed initial data
    $('#createLink').click(addNewRecord); // Add event to click button

    function addNewRecord() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        if (country.length === 0 || capital.length === 0) return; // Do not add empty records
        addRow(country, capital);
        fixActionFieldOptions();
    }

    function seedData() {
        addRow('Bulgaria', 'Sofia');
        addRow('Germany', 'Berlin');
        addRow('Russia', 'Moscow');
        fixActionFieldOptions();
    }

    function addRow(country, capital) {
        $('<tr>').append(`<td>${country}</td>`)
            .append(`<td>${capital}</td>`)
            .append($('<td>')
                .append($('<a href="#">[Up]</a>').click(moveUp))
                .append($('<a href="#">[Down]</a>').click(moveDown))
                .append($('<a href="#">[Delete]</a>').click(del))
            )
            .appendTo('#countriesTable');
    }

    function moveUp() {
        let trToMoveUp = $(this).parent().parent();
        trToMoveUp.fadeOut(() => {
            trToMoveUp.insertBefore(trToMoveUp.prev());
            trToMoveUp.fadeIn();
            fixActionFieldOptions();
        });

        fixActionFieldOptions();
    }

    function moveDown() {
        let trToMoveDown = $(this).parent().parent();
        trToMoveDown.fadeOut(() => {
            trToMoveDown.insertAfter(trToMoveDown.next());
            trToMoveDown.fadeIn();
            fixActionFieldOptions();
        });

    }

    function del() {
        let toDelete = $(this).parent().parent();

        toDelete.fadeOut(() => {
            toDelete.remove();
            fixActionFieldOptions();
        });
    }

    function fixActionFieldOptions() {
        let table = $('#countriesTable');

        $(table).find('a').css('display', 'inline'); // Display all links
        $(table).find('tr:nth-child(3) td:last-child a:first-child').css('display', 'none'); // Disable first row up button
        $(table).find('tr:last-child td:last-child a:nth-child(2)').css('display', 'none'); // Disable last row down button
    }
}