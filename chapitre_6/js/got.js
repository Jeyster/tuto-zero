// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
        case "ST":
            return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return [];
    }
}


//Ajouter lors du chargement de la page les différentes maisons dans le select
var maisonsSelectElt = document.getElementById("maison");
maisons.forEach(function (maison) {

    var newOption = document.createElement("option");
    newOption.setAttribute("value", maison.code);
    newOption.textContent = maison.nom;
    maisonsSelectElt.appendChild(newOption);

})


//Affiche les personnages d'une maison dans la liste d'id "persos"
function displayPerso(e){

    var ulElt = document.getElementById("persos");
    ulElt.innerHTML = "";

    var persoTab = getPersonnages(e.target.value);
    persoTab.forEach(function (perso){
        var liElt = document.createElement("li");
        liElt.textContent = perso;
        ulElt.appendChild(liElt);
    })
}

//Execute displayPerso lorsque select change
maisonsSelectElt.addEventListener("change", displayPerso);

