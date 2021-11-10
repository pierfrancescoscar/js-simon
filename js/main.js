// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Refs
const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const restartBtn = document.querySelector('.restart')
let numbers = [];
let userNumbers = [];
let result = '';

// Functions Evocations
genRandNumber (1, 100);

startBtn.addEventListener('click', () => {
    // 5 Numbers on screen generator
    numbers = genRandNumber (1, 100);

    // Writing into initial display zero
    display.innerText = numbers;

    // Creating timer after showing 5 numbers
    setTimeout(() => {
    alert('Time flies but you are the pilot! You have seen 5 numbers, do you remember all of them?')
    display.innerHTML = '';
    }, 2999);

    // Ask to the user 5 times numbers that he remembers
    setTimeout (()=> {
        for (let i = 0; i < 5; i++) {
            userNumbers.push(parseInt(prompt('Please, enter the numbers that you remember.')));
        }
        console.log('entered numbers: ', userNumbers);
        // Checking numbers entered vs numbers previously generated
        const correctNumbers = userNumbers.filter((num) => {
        return numbers.includes(num);
      })
      console.log('equal numbers: ', correctNumbers);

      result = alert(`You guessed exactly ${correctNumbers}`);

    }, 3001)

});




// Functions - Gen random number from 1 to 100
function genRandNumber(min, max) {

    let numbers = [];

    for (let i = 0; i < 5; i++) {
        numbers.push(Math.floor(Math.random() * max) + min);
    }

    return numbers;
}
