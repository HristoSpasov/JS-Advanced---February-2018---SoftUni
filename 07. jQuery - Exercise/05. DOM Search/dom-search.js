function domSearch(selector, isCaseSensitive) {
    createAddFunctionality();
    createSearchFunctionality();
    createResultFunctionality();

    function createResultFunctionality() {
        let result = $('<div>').addClass('result-controls');
        result.append($('<ul>').addClass('items-list'));

        $(selector).append(result);
    }

    function createSearchFunctionality() {
        let search = $('<div>').addClass('search-controls');
        search.append($('<label>').text('Search: '));
        search.append($('<input>').change(filterElements));

        $(selector).append(search);
    }

    function createAddFunctionality() {
        let add = $('<div>').addClass('add-controls');
        add.append($('<label>').text('Enter text: ').append($('<input>')));
        add.append($('<a>').addClass('button').css('display', 'inline-block').text('Add').click(addNewElement))

        $(selector).append(add);
    }

    function filterElements() {
        let input = $('div.search-controls input').val();

        if(!isCaseSensitive) {
            input = input.toLowerCase();
        }

        let lis = $('div.result-controls ul.items-list li.list-item');

        for (let li of lis) {
            let text = $(li).find('strong').text();
            if(!isCaseSensitive) {
                text = text.toLowerCase();
            }

            if(text.indexOf(input) !== -1) {
                $(li).prop('style', 'display: block')
            } else {
                // Hide li
                $(li).prop('style', 'display: none');
            }
        }
    }

    function addNewElement(){
        let unorderdList = $('div.result-controls ul.items-list'); // Get list

        let inputValue = $('div.add-controls input'); // Get user input

        if (inputValue.val().length === 0) return;

        // Create new li
        let newLi = $('<li>').addClass('list-item')
            .append($('<a>').addClass('button').text('X').click(deleteElement))
            .append($('<strong>').text(inputValue.val()));

        unorderdList.append(newLi); // Add new li to list

        inputValue.val(''); // Clear input
    }
    
    function deleteElement() {
        $(this).parent().remove();
    }
}