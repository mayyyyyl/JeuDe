
const hold = document.getElementById("hold");
const roledice = document.getElementById("roledice");
const play = document.getElementById("play");
const newgame = document.getElementById("newgame");

class player {
    constructor(pseudo) {
        this.pseudo = pseudo
    }
}

/* création des joueurs */
let player1 = new player(this.pseudo);
let player2 = new player(this.pseudo);

play.addEventListener('click', () => {
    getName();
});

newgame.addEventListener('click', () => {
    startNewGame();
});

/* Choisir son nom */
function getName() {

    let pseudo_player1 = document.getElementById('player1');
    let pseudo_player2 = document.getElementById('player2');

    try {
        player1.pseudo = window.prompt('Nom du joueur 1');
        player2.pseudo = window.prompt('Nom du joueur 2');

        if (player1.pseudo == player2.pseudo || player2.pseudo == player1.pseudo) {
            throw new Error("noms identiques");
        }
        if (player1.pseudo == "" || player2.pseudo == "") {
            throw new Error("nom de joueur(s) vide(s)");
        }
    } catch (Error) {
        window.alert('Les noms de joueurs doivent êtres différents et non vides.')
        getName();
    }
    pseudo_player1.textContent = player1.pseudo
    pseudo_player2.textContent = player2.pseudo
    game.removeAttribute("hidden");
    play.setAttribute("disabled", "disabled");
}

function startNewGame() {
    play.removeAttribute("disabled");
    game.setAttribute("hidden", "hidden");
}


// function myStopFunction() {
//     clearInterval(myInterval);
// }

// function toggleStatus() {
//     statut = !statut
//     if (statut == true) {
//         img.src = "static/img/stop.png";

//         if (beginTimestamp == null) {
//             beginTimestamp = Date.now()
//         }
//         endTimestamp = null;
//         myInterval = setInterval(myTimer, 1000);
//         chantierSelect.setAttribute("disabled", "disabled");
//         rangestart();
//     }
//     else {
//         img.src = "static/img/play.png";
//         myStopFunction();
//     }
// }

// img.addEventListener("click", toggleStatus);