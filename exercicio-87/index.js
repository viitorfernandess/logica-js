// Dado um array de números inteiros, verificar se existe uma sequência
// de 3 números ímpares consecutivos.
// Retornar true caso exista essa sequência e false caso contrário.

const arr = [1, 2, 3, 5, 7]

function threeConsecutivesOdds(arr) {
    let soma = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            soma = 0
        } else {
            soma++
            if (soma === 3) {
                return true
            }
        }
    }

    return false
}

console.log(threeConsecutivesOdds(arr))