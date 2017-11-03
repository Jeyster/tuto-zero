//Creation elements et ajout dans html
var aSpan = document.createElement("a");
aSpan.setAttribute("tabindex","0");
aSpan.id = "A";
aSpan.classList = "letter";
aSpan.textContent = "A";

var bSpan = document.createElement("a");
bSpan.setAttribute("tabindex","0");
bSpan.id = "B";
bSpan.classList = "letter";
bSpan.textContent = "B";

var cSpan = document.createElement("a");
cSpan.setAttribute("tabindex","0");
cSpan.id = "C";
cSpan.classList = "letter";
cSpan.textContent = "C";

var sepSpan1 = document.createElement("span");
sepSpan1.textContent = "|";
var sepSpan2 = document.createElement("span");
sepSpan2.textContent = "|";
var sepSpan3 = document.createElement("span");
sepSpan3.textContent = "|...";

var lettersDiv = document.getElementById("letters");
lettersDiv.appendChild(aSpan);
lettersDiv.appendChild(sepSpan1);
lettersDiv.appendChild(bSpan);
lettersDiv.appendChild(sepSpan2);
lettersDiv.appendChild(cSpan);
lettersDiv.appendChild(sepSpan3);

//Get lexique de la lettre clickée sur https://oc-jswebsrv.herokuapp.com/api/lexique
document.addEventListener("click", function (e) {

    if (e.target.id) {
        var letter = e.target.id;

        var lexiqueElt = document.getElementById("definitions");
        lexiqueElt.innerHTML = "";

        var url = "https://oc-jswebsrv.herokuapp.com/api/lexique/"+letter;
        ajaxGet(url, function (reponse) {
            var lexique = JSON.parse(reponse);
            lexique.forEach(function (word) {
                var termElt = document.createElement("h2");
                termElt.textContent = word.term;
                var defELt = document.createElement("p");
                defELt.textContent = word.definition;

                lexiqueElt.appendChild(termElt);
                lexiqueElt.appendChild(defELt);
            })
        });


    }

});