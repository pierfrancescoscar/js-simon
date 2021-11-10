// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Refs
const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const restartBtn = document.querySelector('.restart')
let numbers = [];

// Functions Evocations
genRandNumber (1, 100);

startBtn.addEventListener('click', () => {

    numbers = genRandNumber (1, 100);
    display.innerText = numbers;
})

// Functions - Gen random number from 1 to 100
function genRandNumber(min, max) {

    let numbers = [];

    for (let i = 0; i < 5; i++) {
        numbers.push(Math.floor(Math.random() * max) + min);
    }

    return numbers;
}
