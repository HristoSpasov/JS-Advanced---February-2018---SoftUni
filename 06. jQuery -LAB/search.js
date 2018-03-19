function search() {
    let search = $('input#searchText').val(); // Get search string
    if(search.length === 0) return;
    let lis = $('ul#towns li'); // Get all lis
    lis.css('font-weight', ''); // Remove font weight

    let toMark = Array.from(($(lis).filter((i, e) => $(e).text().toLowerCase().indexOf(search.toLowerCase()) > - 1)));
    toMark.forEach(e => $(e).css('font-weight', 'bold'));

    $('#result').text(`${toMark.length} matches found.`);
}