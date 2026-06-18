/*
Dado um número inteiro num, retorne a quantidade de dígitos
de num que dividem o próprio num.

Um inteiro val divide num se:

num % val === 0
*/

function countDigits(num) {
    const digit = String(num)
    let count = 0

    for (let i = 0; i < digit.length; i++) {
        if (num % Number(digit[i]) === 0) {
            count++
        }
    }

    return count
}

console.log(countDigits(241))