// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
var definitionList = document.createElement("dl");

var terme1 = document.createElement("dt");
var strong1 = document.createElement("strong");
strong1.textContent = mots[0].terme;
terme1.appendChild(strong1);
definitionList.appendChild(terme1);
var definition1 = document.createElement("dd");
definition1.textContent = mots[0].definition;
definitionList.appendChild(definition1);

var terme2 = document.createElement("dt");
var strong2 = document.createElement("strong");
strong2.textContent = mots[1].terme;
terme2.appendChild(strong2);
definitionList.appendChild(terme2);
var definition2 = document.createElement("dd");
definition2.textContent = mots[1].definition;
definitionList.appendChild(definition2);

var terme3 = document.createElement("dt");
var strong3 = document.createElement("strong");
strong3.textContent = mots[2].terme;
terme3.appendChild(strong3);
definitionList.appendChild(terme3);
var definition3 = document.createElement("dd");
definition3.textContent = mots[2].definition;
definitionList.appendChild(definition3);

document.getElementById("contenu").appendChild(definitionList);