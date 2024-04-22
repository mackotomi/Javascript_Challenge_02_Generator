// Animation trigger for dice roll if clicked for representing the roll for random new key.
let diceIcon = document.querySelector('.dice');

diceIcon.addEventListener('click', function() {
    this.classList.toggle('clicked');
        if (this.classList.contains('clicked')) {
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 200); // Toggle 'active' class after 100ms
        }
});

// This variable contains all letter and numbers with lowercase and uppercase format.
let keyrange = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0';

// Cleaning up all the ',' + 'whitespaces'.
let cleanUp = keyrange.replace(/,/g, ""); // Remove the ,
cleanUp = cleanUp.replace(/\s/g, ""); // Remove the whitespaces
console.log('this is what we get after cleanup: ' + cleanUp);

/* 
I could have write the letters like that from the beginning into the keyrange variable
But that would not teach me to work with arrays
*/

// The keyrange variable is splitted into separated indexes into array with name keys.
let keysSplit = [...cleanUp];
console.log(keysSplit.length);
// The split(); method doesnt worked the way i wanted.
let keySplitArray = [...keysSplit];
console.log(keySplitArray);

keyLength = keySplitArray.length

let x = Math.floor(Math.random() * keyLength);

function keyIndexRoll(){
    let roll = Math.floor(Math.random() * keyLength);
    console.log(roll + ' -> ' +keySplitArray[roll]);
}

diceIcon.addEventListener('click' , () =>{
    for (let rolls = 0; rolls <= 10; rolls++) {
        keyIndexRoll();
    }
})

console.log('this number is randomly generated: ' + x);
