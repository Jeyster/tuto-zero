document.getElementById("langages").innerHTML += "<li id='c'>C</li>";
//document.getElementById("langages").innerHTML = "";
document.querySelector("h1").textContent += " de programmation";

document.querySelector("h1").setAttribute("id","titre");

var titreElt = document.querySelector("h1");
titreElt.classList.remove("debut");
titreElt.classList.add("titre");
//console.log(titreElt);

var pythonElt = document.createElement("li");
pythonElt.id = "python";
pythonElt.textContent = "Python";
pythonElt.classList.add("python");
document.getElementById("langages").appendChild(pythonElt);
console.log(pythonElt);

var rubyElt = document.createElement("li");
rubyElt.id = "ruby";
rubyElt.appendChild(document.createTextNode("Ruby"));
document.getElementById("langages").appendChild(rubyElt);

var perlElt = document.createElement("li");
perlElt.id = "perl";
perlElt.textContent = "Perl";
document.getElementById("langages").insertBefore(perlElt, document.getElementById("php"));

document.getElementById("langages").insertAdjacentHTML("afterbegin", "<li id='javascript'>JavaScript</li>");

var bashElt = document.createElement("li");
bashElt.id = "bash";
bashElt.textContent = "Bash";
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));

document.getElementById("langages").removeChild(document.getElementById("bash"));

//var newText = document.createElement("p");
//newText.innerHTML = "En voici une ";
//var url = document.createElement("a")
//url.setAttribute("href","https://fr.wikipedia.org/wiki/Liste_de_langages_de_programmation");
//newText.innerHTML += url;
//newText.innerHTML += " plus complète.";
//document.querySelector("body").appendChild(newText);
document.querySelector("body").innerHTML += 'En voici une <a href="https://fr.wikipedia.org/wiki/Liste_de_langages_de_programmation">liste</a> plus complète.';