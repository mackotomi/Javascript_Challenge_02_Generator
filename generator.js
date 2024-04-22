document.querySelector('.dice').addEventListener('click', function() {
    this.classList.toggle('clicked');
        if (this.classList.contains('clicked')) {
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 200); // Toggle 'active' class after 100ms
        }
});



let keyrange = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0';

let keys = [keyrange.split(" ")];

console.log(keys);

// Variable with total number of keys in array.
let keyLength = keys.length;
let keyZero = 0;

var randomNumber = Math.floor(Math.random() * keys.length) + keyZero;
console.log(randomNumber);
