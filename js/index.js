'use strict'

let num = prompt('Введите число')

function prime(num) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

   alert(prime(num));