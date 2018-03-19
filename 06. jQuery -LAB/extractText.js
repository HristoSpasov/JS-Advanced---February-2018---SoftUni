function extractText() {
    $('div#result').text(Array.from($('ul#items li')).map(e => e.textContent).join(', '))
}