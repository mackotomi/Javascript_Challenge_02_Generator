"use strict";

// Regenerated code value storage.
let keyInstance = '';

// Targeting the dice icon
let dice = document.querySelector('#dice');

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

// Declaring the keyset for generator to pick from..
const keyboardArray = [
    // Uppercase letters
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    // Lowercase letters
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    // Numbers 0 to 9
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    // Special characters
    '!','?','@','.','/',',','=','+'
];

// Keyboard array count
let keyboardLength = keyboardArray.length;

// Just an Array check with Lenght
// console.log(keyboardArray);
// console.log('This number is .length of keyboard array: ' + keyboardLength);

// Empty array for extracted keys.
let keyboardArrayExctract = [];
// This loop loops 8x times for random number from 0 to Keyboard.Length and pushes them into array
dice.addEventListener('click' , () =>{
    letsroll();
})

function letsroll() {
    let roll = [];
    for (let index = 0; index < 10; index++) {
        // Math random with Trunc combined * Length number of the array with push to new array roll[];
        roll.push(keyboardArray[(Math.trunc(Math.random() * keyboardLength))]);
    }
    // Turning the array into string.
    let keys = roll.join();
    // Replacing all , with nothing, emptiness.
    let keyrequest = keys.replace(/,/g, '');
    // Printing for check what we get.
    console.log(keyrequest);
    keyInstance = keyrequest;
    // Grabbing target element inside the function
    let keygen = document.querySelector('.keygen');
    // Setting the element attribute content to generated key.
    keygen.setAttribute('placeholder' , keyrequest);
    // Printing warning message.
    console.log('Warning: The user must write this code if he or she wants to send an email: → ' + keyrequest);
    console.log(); // Self note: Wasnt sure if it was ok to add empty console to add line that divides console.log messages, felt hacky, but after some reading, it is common and totaly fine, fine, fine... moving on
}

// Run the function with page load, this makes the generated code be regenerated with reload and initiates code value be presented immediately..
letsroll();

console.log(keyInstance);

