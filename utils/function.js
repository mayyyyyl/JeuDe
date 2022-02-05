const hold = document.getElementById("hold");
const roledice = document.getElementById("roledice");
const play = document.getElementById("play");
const newgame = document.getElementById("newgame");
const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");

/* Classe joueur*/
class player {
    constructor(pseudo) {
        this.pseudo = pseudo
    }
}

/* Création des joueurs */
let player1 = new player(this.pseudo);
let player2 = new player(this.pseudo);


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
        return "erreur";

    }
    pseudo_player1.textContent = player1.pseudo
    pseudo_player2.textContent = player2.pseudo
    game.removeAttribute("hidden");
    play.setAttribute("disabled", "disabled");
    play.setAttribute("hidden", "hidden");
    circle2.setAttribute("hidden", "hidden");
}

/* Commencer une nouvelle partie*/
function startNewGame() {
    play.removeAttribute("disabled");
    play.removeAttribute("hidden");
    game.setAttribute("hidden", "hidden");
}

let score = [0, 0];
let scoreglobal = [0, 0];
let players = [player1, player2];
let turn = 0;


/* Lancer de dé*/
function rollDice() {

    players[turn];

    diceNumber = Math.floor(Math.random() * 6) + 1;

    if (diceNumber == 1) {

        score[turn] = 0;

        turn = turn + 1;
        if (turn == players.length) {
            turn = 0;
        }
    }
    else {
        score[turn] += diceNumber;
    }

    return document.getElementById("diceNumber").innerHTML = diceNumber,
        document.getElementById("round1").innerHTML = score[0],
        document.getElementById("round2").innerHTML = score[1];
}

/* Sauver son score */
function holdscore() {

    scoreglobal[turn] += score[turn];

    if (scoreglobal[turn] >= 100) {
        return document.getElementById("global1").innerHTML = scoreglobal[0],
            document.getElementById("global2").innerHTML = scoreglobal[1],
            window.alert("Vous avez gagné !!!!!!!");
    }

    score[turn] = 0;
    turn = turn + 1;
    if (turn == players.length) {
        turn = 0;
    }
    return document.getElementById("global1").innerHTML = scoreglobal[0],
        document.getElementById("global2").innerHTML = scoreglobal[1],
        document.getElementById("round1").innerHTML = score[0],
        document.getElementById("round2").innerHTML = score[1];
}