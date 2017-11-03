var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var jsonData = {
        pseudo: e.target.elements.pseudo.value,
        evaluation: e.target.elements.notation.value,
        message: e.target.elements.message.value,
    };
    ajaxPost("https://oc-jswebsrv.herokuapp.com/api/temoignage", jsonData, function () {
        var divElt = document.getElementById("confirmation");
        divElt.textContent = "";
        divElt.appendChild(document.createTextNode("Témoingage envoyé."));
    },
    true);
    ajaxGet("https://oc-jswebsrv.herokuapp.com/temoignages", function (response) {
        var temoignages = JSON.stringify(response);
        var temoignagesElt = document.getElementById("temoignages");
        temoignagesElt.textContent = "";
        temoignages.forEach(function (temoignage) {
            temoignagesElt.textContent += tempignage.pseudo + " , " + temoignage.notation + " , " + temoignage.message;
        })
    });
});