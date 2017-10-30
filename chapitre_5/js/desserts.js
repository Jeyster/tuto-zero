var ulElt = document.getElementById("desserts");

function addDessert(){
    var dessert = prompt("Nom du dessert : ");
    var li = document.createElement("li");
    li.textContent = dessert;
    ulElt.appendChild(li);
}



function modifyDessert(){
    var dessertToModify = prompt("Nom du dessert à modifier : ");
    var dessertList = document.getElementsByTagName("li");

    for (var i = 0; i < dessertList.length; i++){

        if (dessertList[i].textContent == dessertToModify){
            var newDessert = prompt("Nom du nouveau dessert : ");
            dessertList[i].textContent = newDessert;
        }

    }

}


var addButtonElt = document.getElementById("add");
addButtonElt.addEventListener("click", addDessert);

var modifyButtonElt = document.getElementById("modify");
modifyButtonElt.addEventListener("click", modifyDessert)