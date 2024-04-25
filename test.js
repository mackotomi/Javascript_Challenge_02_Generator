let html = document.querySelector('html');

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
let keyboardArrayExctract = [];


// This function rolls random number from 0 to Keyboard.Length (10)

for (let index = 0; index < 8; index++) {
        keyboardArrayExctract.push(keyboardArray[(Math.trunc(Math.random() * keyboardLength))]);
}   

html.innerText = keyboardArrayExctract;

console.log(keyboardArrayExctract);




