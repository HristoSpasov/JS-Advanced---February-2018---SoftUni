function highlight(selector) {
    let selected = $(selector);
    if($(selected).children().length === 0){
        $(selector).addClass("highlight");
    } else {
        let nextLevel = $(selected).children();

        while($(nextLevel).length !== 0) {
            selected = $(nextLevel);
            nextLevel = $(nextLevel).children();
        }

        $(selected).first().addClass('highlight');
        $(selected).first().parentsUntil($(selector).parent()).addClass('highlight');
    }
}