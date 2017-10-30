var spanElt = document.getElementById("compteurClics");
var nbreClic = 0;
function compteur(){
    nbreClic++;
    spanElt.textContent = nbreClic;
}

var clicButtonElt = document.getElementById("clic");
clicButtonElt.addEventListener("click", compteur);


var desactivateButtonElt = document.getElementById("desactiver");
desactivateButtonElt.addEventListener("click", function(){
    clicButtonElt.removeEventListener("click", compteur);
});