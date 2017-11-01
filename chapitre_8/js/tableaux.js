function createTab(tableau) {
    var tabElt = document.getElementById("tableaux");
    var trElt = document.createElement("tr");

    for (var prop in tableau) {
        var tdElt = document.createElement("td");
        tdElt.innerHTML = tableau[prop];
        trElt.appendChild(tdElt);
    }
    tabElt.appendChild(trElt);

}


function afficherHTMLFromJSON(reponse) {
    var tableaux = JSON.parse(reponse);
    var tabElt = document.getElementById("tableaux");
    var trElt = document.createElement("tr");

    Object.keys(tableaux[0]).forEach(function (key) {
        var tdElt = document.createElement("td");
        tdElt.innerHTML = key;
        trElt.appendChild(tdElt);
    });
    tabElt.appendChild(trElt);

    tableaux.forEach(createTab);
}


ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", afficherHTMLFromJSON);
