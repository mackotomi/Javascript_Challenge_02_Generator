// Animation trigger for dice roll if clicked for representing the roll of random key generated.
let diceIcon = document.querySelector('#dice');
diceIcon.addEventListener('click', function() {
    this.classList.toggle('clicked');
        if (this.classList.contains('clicked')) {
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 200); // Toggle 'active' class after 200ms
        }
});


let dice = document.querySelector('#dice');
let html = document.querySelector('html');
let generated = document.querySelector('.generated');
console.log(dice);
// Declaring the keyset for generator to pick from..

const keyboardArray = [
    // Uppercase letters
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    // Lowercase letters
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    // Numbers 0 to 9
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

console.log(keyboardArray);
let keyboardLength = keyboardArray.length;
console.log('This number is .length of keyboard array: ' + keyboardLength);
console.log();

// Empty array for extracted keys.
let keyboardArrayExctract = [];
// This loop loops 8x times for random number from 0 to Keyboard.Length and pushes them into array
dice.addEventListener('click' , () =>{
    letsroll();
})

function letsroll() {
    let roll = [];
    for (let index = 0; index < 5; index++) {
            console.log('button clicked');
            roll.push(keyboardArray[(Math.trunc(Math.random() * keyboardLength))]);
    }
    console.log(roll);
    let keys = roll.join();
    let keyrequest = keys.replace(/,/g, '');
    return keyrequest;
}

// Why the keyrequest doesnt get updated when dice is clicked that regenerates the code and the return value also
keyrequest = letsroll();
console.log(keyrequest);

// Target the input attribute placeholder.
// Set the attribute placeholder content as the keyrequest.
let keygen = document.querySelector('.keygen')
keygen.setAttribute('placeholder' , keyrequest);