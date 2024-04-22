// Animation trigger for dice roll if clicked for representing the roll for random new key.
document.querySelector('.dice').addEventListener('click', function() {
    this.classList.toggle('clicked');
        if (this.classList.contains('clicked')) {
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 200); // Toggle 'active' class after 100ms
        }
});

// This variable contains all letter and numbers with lowercase and uppercase format.
let keyrange = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0';

// This will clean up all the , and only letters will remain.
let cleanUp = keyrange.replace(/,/g, ""); // Remove the ,
cleanUp = cleanUp.replace(/\s/g, ""); // Remove the whitespaces
console.log('this is cleanup after remove , and whitespace:' + cleanUp);
// I could have write it like that right from the beginning into the keyrange variable
// But that would not teach me to work with arrays

// The keyrange variable is splitted into separated indexes into array with name keys.
let keysSplit = [...cleanUp];
console.log(keysSplit.length);
// The split(); method doesnt worked the way i wanted.
let keySplitArray = [...keysSplit];
console.log(keySplitArray);

// // The keyrange variable is splitted into separated indexes into array with name keys.
// let keysMatch = [keyrange.match(/[a-zA-Z0-9]/g)];
// let keysMatchArray = [...keysMatch];
// // The .match method did worked the way i wanted.
// console.log(keysMatchArray);
// // Checking the length
// let keysMatchArrayLength = keysMatchArray.length;
// console.log(keysMatchArrayLength);

// Check of the split.
// console.log(keysArray);


// Variable of total number count or length based on array index count.. also represinting the max number for math random method.
// let keyLength = keysArray.length;

// console.log('the key lentgth is ' + keyLength);

// Variable with 0 number that is the minimum number for the random math, the idea is to generate random number from 0 to max number based on the array count of keyLength.
// let keyZero = 0;

// let x= 100;
// let y= 0;

// let randomNumber = Math.floor(Math.random() * keyLength);
// let randomNumber2 = Math.floor(Math.random() * x);

// console.log('this is the random number: ' + randomNumber);
// console.log('this number is randomly generated: ' + randomNumber2);
