var couleur = "white";

var divElts = document.getElementsByTagName("div");



function colorChoice(e){
    var touche = String.fromCharCode(e.charCode);

    switch (touche){
        case "r":
            couleur = "red";
            break;
        case "j":
            couleur = "yellow";
            break;
        case "v":
            couleur = "green";
            break;
        case "b":
            couleur = "white";
            break;
    }

    changeColor();
}


document.addEventListener("keypress", colorChoice);

function changeColor(){

    for (var i = 0; i < divElts.length; i++){

        divElts[i].style.backgroundColor = couleur;

    }
}
