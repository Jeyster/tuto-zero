// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];


var inputElt = document.getElementById("pays")
inputElt.value = "" ;


//Affichage des pays lorsque évènement keyup dans input text
inputElt.addEventListener("keyup", function (e) {

    //on vide la div
    document.getElementById("suggestions").innerHTML = "";

    var bigSpanElt = document.createElement("span");

    //Suggestions : création des spans satisfaisant la saisie (par regex) et ajout dans div
    listePays.forEach(function (pays) {

        var myRegex = new RegExp("^"+e.target.value+".*","i");

        if ((e.target.value !== "") && (pays.search(myRegex) !== -1)){
            var spanElt = document.createElement("span");
            spanElt.textContent = pays;
            spanElt.classList = "suggestion";

            bigSpanElt.appendChild(spanElt);
            bigSpanElt.appendChild(document.createElement("br"));
        }

    })

    document.getElementById("suggestions").appendChild(bigSpanElt);

})


//Remplis input value avec pays lorsque clic dessus
document.addEventListener("click", function (e) {


    if (e.target.classList.contains("suggestion")){

        inputElt.value = e.target.textContent;
        //on vide la div
        document.getElementById("suggestions").innerHTML = "";

    }

})





