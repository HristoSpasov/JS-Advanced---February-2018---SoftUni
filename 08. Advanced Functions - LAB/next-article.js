function getArticleGenerator(articles) {
    let content = $('#content');

    return function () {
        if(articles.length > 0){
            let element = articles.shift();

            let newArticle = $('<article>').append($('<p>').text(element));
            $(content).append(newArticle);
        }
    };
}