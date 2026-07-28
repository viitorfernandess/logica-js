// LeetCode 344 - Reverse String
// Objetivo:
// Receber um array de caracteres e inverter sua ordem modificando o próprio array (in-place),
// sem criar um novo array e utilizando apenas O(1) de memória extra.
// A solução deve trocar os caracteres das extremidades utilizando dois ponteiros.

function reverseString(s) {

    let i = 0
    let j = s.length - 1

    while (i < j) {
        const temp = s[i]
        s[i] = s[j]
        s[j] = temp

        i++
        j--
    }

    return s
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))