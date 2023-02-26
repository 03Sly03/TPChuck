function ChangeChuckText() {
    let chuckQuote = document.querySelector(".chuckText");
    chuckQuote.innerHTML = chuckTextArr[getRandomInt(chuckTextArr.length)];
    document.body.style.backgroundColor = `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`;
    chuckStyle.style.color = `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`;
    chuckStyle2.style.color = `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`;
    colorText.style.color = `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`;
    myButton.style.color = `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`;
    myButton.style.backgroundColor= `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let myButton = document.querySelector("#chuckTextChangeBtn");
let chuckStyle = document.querySelector(".chuck");
let chuckStyle2 = document.querySelector(".chuck2");
let colorText = document.querySelector(".chuckText");
let chuckTextArr = [
    "Google, c’est le seul endroit où tu peux taper Chuck Norris !",
    "Chuck Norris a un jour avalé un paquet entier de somnifères. Il a cligné des yeux.",
    "Chuck Norris ne prends jamais de laxatif; personne ne fait chier Chuck Norris !",
    "Rien ne sert de jouer aux échecs avec Chuck Norris, il ne connait pas l’échec.",
    "Chuck Norris a déjà compté jusqu’à l’infini. Deux fois.",
    "Chuck Norris a piraté le Pentagone. Avec un grille-pain.",
    "Un jour, Chuck Norris a couru si vite qu'il a failli se rentrer dedans.",
    "Les ennemis de Chuck Norris lui disent souvent d'aller au diable. Le Diable aimerait bien qu'ils arrêtent.",
    "Chuck Norris peut claquer des doigts de pied.",
    "Chuck Norris a retrouvé Ornicar.",
];

myButton.addEventListener("click", ChangeChuckText);