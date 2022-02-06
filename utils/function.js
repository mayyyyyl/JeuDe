const hold = document.getElementById("hold");
const roledice = document.getElementById("roledice");
const play = document.getElementById("play");
const newgame = document.getElementById("newgame");
const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const round1 = document.getElementById("round1");
const round2 = document.getElementById("round2");
const global1 = document.getElementById("global1");
const global2 = document.getElementById("global2");
const win = document.getElementById("win");

/* Classe joueur */
class player {
    constructor(pseudo) {
        this.pseudo = pseudo
    }
}

/* Création des joueurs */
let player1 = new player(this.pseudo);
let player2 = new player(this.pseudo);

/* Création des constantes */
let score = [0, 0];
let scoreglobal = [0, 0];
let players = [player1, player2];
let turn = 0;

/* Ecoute des boutons */
play.addEventListener('click', () => {
    getName();
});

newgame.addEventListener('click', () => {
    startNewGame();
});

roledice.addEventListener('click', () => {
    rollDice();
});

hold.addEventListener('click', () => {
    holdscore();
});

/* Choisir son pseudo */
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
        if ((player1.pseudo).length > 25 || (player2.pseudo).length > 25) {
            throw new Error("nom de joueur(s) trop long");
        }
    } catch (Error) {
        window.alert('Les noms de joueurs doivent êtres différents et non vides.')
        return "erreur";

    }
    pseudo_player1.textContent = player1.pseudo
    pseudo_player2.textContent = player2.pseudo
    game.removeAttribute("hidden");
    play.setAttribute("disabled", "disabled");
    play.setAttribute("hidden", "hidden");
    circle2.setAttribute("hidden", "hidden");
}

/* Commencer une nouvelle partie */
function startNewGame() {
    play.removeAttribute("disabled");
    play.removeAttribute("hidden");
    roledice.removeAttribute("disabled");
    hold.removeAttribute("disabled");
    game.setAttribute("hidden", "hidden");
    score = [0, 0];
    scoreglobal = [0, 0];
    delete player2;
    delete player1;
    delete holdscore();
    document.getElementById("diceNumber").innerHTML = null;
    win.innerHTML = null;
}

/* Lancer de dé */
function rollDice() {

    players[turn];

    let diceNumber = Math.floor(Math.random() * 6) + 1;

    if (diceNumber == 1) {

        score[turn] = 0;

        turn = turn + 1;
        circle2.removeAttribute("hidden");
        circle1.setAttribute("hidden", "hidden");

        if (turn == players.length) {
            turn = 0;
            circle2.setAttribute("hidden", "hidden");
            circle1.removeAttribute("hidden");
        }
    }
    else {
        score[turn] += diceNumber;
    }

    return document.getElementById("diceNumber").innerHTML = diceNumber,
        round1.innerHTML = score[0], round2.innerHTML = score[1];
}

/* Sauver son score */
function holdscore() {

    scoreglobal[turn] += score[turn];

    if (scoreglobal[turn] >= 100) {
        return global1.innerHTML = scoreglobal[0], global2.innerHTML = scoreglobal[1],
            win.innerHTML = "Vous avez gagné " + String(players[turn].pseudo) + " !!!",
            roledice.setAttribute("disabled", "disabled"), hold.setAttribute("disabled", "disabled");
    }

    score[turn] = 0;
    turn = turn + 1;
    circle2.removeAttribute("hidden");
    circle1.setAttribute("hidden", "hidden");

    if (turn == players.length) {
        circle2.setAttribute("hidden", "hidden");
        circle1.removeAttribute("hidden");
        turn = 0;
    }
    return global1.innerHTML = scoreglobal[0], global2.innerHTML = scoreglobal[1],
        round1.innerHTML = score[0], round2.innerHTML = score[1];
}