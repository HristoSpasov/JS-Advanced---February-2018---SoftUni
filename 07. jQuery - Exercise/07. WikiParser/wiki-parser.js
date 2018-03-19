function wikiParser(selector) {
    // Patterns
    let boldPattern = /'{3}([^'[\]=]*?)'{3}/g;
    let italicPattern = /'{2}([^'[\]=]*?)'{2}/g;
    let h3Pattern = /={3}([^'[\]=]*?)={3}/g;
    let h2Pattern = /={2}([^'[\]=]*?)={2}/g;
    let h1Pattern = /={1}([^'[\]=]*?)={1}/g;
    let linkPattern = /\[{2}([^'[\]=\|]*?)\]{2}/g;
    let linkWithTextPattern = /\[{2}([^'[\]=]*?)\|([^'[\]=]*?)]{2}/g;


    let text = $(selector).text();

    text = text.replace(boldPattern, (all, g) => `<b>${g}</b>`);
    text = text.replace(italicPattern, (all, g) => `<i>${g}</i>`);
    text = text.replace(h3Pattern, (all, g) => `<h3>${g}</h3>`);
    text = text.replace(h2Pattern, (all, g) => `<h2>${g}</h2>`);
    text = text.replace(h1Pattern, (all, g) => `<h1>${g}</h1>`);
    text = text.replace(linkPattern, (all, g) => `<a href="/wiki/${g}">${g}</a>`);
    text = text.replace(linkWithTextPattern, (all, g1, g2) => `<a href="/wiki/${g1}">${g2}</a>`);

    $(selector).html(text);
}