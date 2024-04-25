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

// Array check with lenght
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
            // console.log('button clicked');
            roll.push(keyboardArray[(Math.trunc(Math.random() * keyboardLength))]);
    }
    let keys = roll.join();
    let keyrequest = keys.replace(/,/g, '');
    console.log(keyrequest);
    let keygen = document.querySelector('.keygen');
    keygen.setAttribute('placeholder' , keyrequest);
    console.log('Warning: The user must write this code if he wants to send an email: ' + keyrequest);
}

// For unknown reason, this needs to be here outside to inject the code to the attribute, why the fuck i have no idea. 
// After this project, learn the scoping, the scope behavior was the biggest challenge when coding this stuff.
let keyrequest = letsroll();


