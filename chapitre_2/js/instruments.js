function infosLiens(){

    const liens = document.getElementsByTagName("a");

    console.log("Nombres de liens :",liens.length);
    console.log("URL du premier lien :",liens[0].getAttribute("href"));
    console.log("URL du dernier lien :",liens[liens.length-1].getAttribute("href"));
}


function possede(liId,liClass){

    if (document.getElementById(liId) === null){
        return console.error("Aucun élément n'a d'Id ",liId);
    }

    if (document.getElementById(liId).classList.contains(liClass)){
        return console.log(true);
    }
    return console.log(false);

}


possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur

//infosLiens();