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

// The keyrange variable is splitted into separated indexes into array with name keys.
let keys = [keyrange.split(" ")];

// Check of the split.
console.log(keys);

// Variable of total number count or length based on array index count.. also represinting the max number for math random method.
let keyLength = keys.length;

// Variable with 0 number that is the minimum number for the random math, the idea is to generate random number from 0 to max number based on the array count of keyLength.
let keyZero = 0;

var randomNumber = Math.floor(Math.random() * keys.length) + keyZero;
console.log(randomNumber);
