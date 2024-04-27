"use strict";

/*
Part 01
Creating array with a set of keys.
Creating generator function that creates random numbers, uses the random numbers as indexes 
of an array and poping index values into new array, where the generated key is being generated. 
*/

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

// Declaring the keyset array for the generator to pick from..
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

// Keyboard array count stored in variable
let keyboardLength = keyboardArray.length;

// Creating a function that will do all the keyboardArray extraction based on random roll of numbers that are used as the indexes for array.
function letsroll() {
    // Empty array init for extracted keys.
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

// Icon target with click event that runs letsroll() function to roll random code.
dice.addEventListener('click' , () =>{
    letsroll();
})

// Run the function with every page load and first visit, this makes the generated code be regenerated with reload and initiates code value be presented immediately when visiting the website..
letsroll();

/*
Part 02
Checking what the user types into field, where the regenerated code from part 01 must match.
*/

// This part will include checking if the input is not empty and that there is really 10 characters.
// If there is 10 characters, check the characters and compare them to the keyInstance.
// If the characters are equal, green outline the input, othewise make it red. This is for UX to singalize the user right or wrong idea.
// If the character are equal, allows to use the send button.
// If less then 10 characters, disable the send button.


// Target send button
let sendButton = document.querySelector('.confirmButton');
// Temporarily disable send button
sendButton.disabled = true;
let keyUserInput = document.querySelector('.keypass');
// Add event listener type of input, when user interacts with the input do something.
keyUserInput.addEventListener('input' , () =>{
    // When interacting, console.log the keypass.value content. Tis will log each key typed into the input by user.
    console.log(keyUserInput.value);
    // We need to make logic that when 10 keys is typed in, store them in a variable and compare it to the regenerated instance that is always stored in the keyInstance variable.
    // We compare two variables content if they are equal;
    // If they are equal, we enable the send button that is stored in variable sendButton
    // We also check if the characters count is 10, otherwise we will disable the button.
    if (keyUserInput.value.length === 10) {
        // console.log(keyUserInput.value);
        let keyUserInputLimitReached = keyUserInput.value;
        console.log(keyUserInputLimitReached);
        // Here we check the key stored in keyUserInputLimitReached by comparing it to the keyInstance and make a logic based on true and false.
        if (keyUserInputLimitReached === keyInstance) {
            sendButton.disabled = false;
        }
    // Here is logic that runs if the length is not equal to 10. This then disables the button.
    } else {
        sendButton.disabled = true;
    }
});

// Challenge finished after 7 days.
// Honestly, i cant believe i was able to finish it, im really proud of myself, pat pat lol.
// It may be considered as an easy project, but it was not..

/*
Summary: 
I was able to solve this challenge using code, that is so cool-cool-cool :]. 
Finally, i have something to show when i will try to apply for front end developer jobs, where js is required.
Lastly, i have learned new things and gained some ++ experience to coding and javascript in general.
And good job buddy, moving on to next challenges.
Note: i did not used any GPT code, occasionally i asked how you can to get an idea and from there, i would try to solve with coding it myself.
*/