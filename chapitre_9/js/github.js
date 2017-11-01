var profilElt = document.createElement("div");
function searchAndDisplay() {
    profilElt.innerHTML = "";
    var searchName = inputElt.value;
    var url = "https://api.github.com/users/"+searchName;

    //Accès aux informations publiques sur user Github
    ajaxGet(url, function (reponse) {
        var user = JSON.parse(reponse);
        var avatarElt = document.createElement("img");
        avatarElt.src = user.avatar_url;
        var nameElt = document.createElement("h2");
        nameElt.textContent = user.name;
        var websiteElt = document.createElement("a");
        websiteElt.href = user.blog;
        websiteElt.textContent = user.blog;

        profilElt.appendChild(avatarElt);
        profilElt.appendChild(nameElt);
        profilElt.appendChild(websiteElt);
    });
}
var bodyElt = document.querySelector("body");
bodyElt.appendChild(profilElt)

var logins = [];
ajaxGet("https://api.github.com/users?page=2&per_page=100", function (response) {
    var users = JSON.parse(response);
    logins = users.map(user => user.login);
})


var inputElt = document.getElementById("inputTxt");
inputElt.value = "";

//Affichage des pays lorsque évènement keyup dans input text
inputElt.addEventListener("keyup", function (e) {

    //on vide la div
    document.getElementById("suggestions").innerHTML = "";

    var bigSpanElt = document.createElement("span");

    //Suggestions : création des spans satisfaisant la saisie (par regex) et ajout dans div
    logins.forEach(function (pays) {

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

var buttonElt = document.getElementById("searchButton");
buttonElt.addEventListener("click", searchAndDisplay)
