var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    ajaxPost("https://oc-jswebsrv.herokuapp.com/article", data, function (response) {
        var divElt = document.getElementById("ajouter");
        divElt.appendChild(document.createTextNode("L'article a bien été ajouté."));
    });
    ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", function (response) {
        var articles = JSON.parse(response);
        var articlesElt = document.getElementById("articles");
        articles.forEach(function (article) {
            articlesElt.textContent += article.titre + " : " + article.contenu;
        })
    })
});