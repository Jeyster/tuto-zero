function afficher(reponse) {
    console.log(reponse);
}


function afficherHTML(reponse) {
    var ulElt = document.getElementById("langages");
    var responseTab = reponse.split(";");
    responseTab.forEach(function (response) {
        var liElt = document.createElement("li");
        liElt.innerText = response;
        ulElt.appendChild(liElt);
    })
}

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", afficherHTML);


