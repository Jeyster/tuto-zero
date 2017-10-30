var contenuElt = document.getElementById("contenu");
var hauteur = contenuElt.offsetHeight;
var largeur = contenuElt.offsetWidth;

var divElt = document.createElement("div");
divElt.textContent = "Informations sur l'élément"

var ulElt = document.createElement("ul");
var li1Elt = document.createElement("li");
li1Elt.textContent = "Hauteur : " + hauteur;
var li2Elt = document.createElement("li");
li2Elt.textContent = "Largeur : " + largeur;

ulElt.appendChild(li1Elt);
ulElt.appendChild(li2Elt);
divElt.appendChild(ulElt);
document.querySelector("body").insertBefore(divElt, contenuElt);