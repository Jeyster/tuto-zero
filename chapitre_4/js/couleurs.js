var divElts = document.getElementsByTagName("div");

var couleur = prompt("Choisissez la couleur du texte : ");
var couleurBack = prompt("Choisissez la couleur du fond : ")

for (var i = 0; i < divElts.length; i++){
    divElts[i].style.color = couleur;
    divElts[i].style.backgroundColor = couleurBack;
}
