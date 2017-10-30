// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];


var contenuElt = document.getElementById("contenu");

for (var i = 0; i < questions.length; i++){

    var strongElt = document.createElement("strong");
    strongElt.textContent = "Question " + (i+1) + " : ";

    var questionElt = document.createElement("span");
    questionElt.appendChild(strongElt);
    questionElt.innerHTML += questions[i].enonce;
    questionElt.appendChild(document.createElement("br"));

    var buttonElt = document.createElement("button")
    buttonElt.id = i;
    buttonElt.textContent = "Afficher la réponse"
    questionElt.appendChild(buttonElt);

    buttonElt.addEventListener("click", function(e){

        var clickedButtonElt = document.getElementById(e.target.id);
        var responseElt = document.createElement("span");
        responseElt.innerHTML = questions[e.target.id].reponse;
        clickedButtonElt.replaceWith(responseElt);

    });

    contenuElt.appendChild(questionElt);
    contenuElt.appendChild(document.createElement("br"));
    contenuElt.appendChild(document.createElement("br"));

}


