// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
var lemondeUrl = document.createElement("a");
lemondeUrl.setAttribute("href",journaux[0]);
lemondeUrl.textContent = journaux[0] + "\n";
lemondeUrl.innerHTML += "<br>";
document.getElementById("contenu").appendChild(lemondeUrl);

var lefigaroUrl = document.createElement("a");
lefigaroUrl.setAttribute("href",journaux[1]);
lefigaroUrl.textContent = journaux[1] + "\n";
lefigaroUrl.innerHTML += "<br>";
document.getElementById("contenu").appendChild(lefigaroUrl);

var libreUrl = document.createElement("a");
libreUrl.setAttribute("href",journaux[2]);
libreUrl.textContent = journaux[2];
libreUrl.innerHTML += "<br>";
document.getElementById("contenu").appendChild(libreUrl);
