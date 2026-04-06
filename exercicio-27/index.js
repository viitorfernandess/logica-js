// Dado um array com 2n números, o objetivo é formar n pares
// de forma que a soma dos menores valores de cada par seja máxima.
//
// Estratégia:
// 1. Ordenar o array em ordem crescente
// 2. Formar pares consecutivos (índice 0 com 1, 2 com 3, etc.)
// 3. Somar os elementos de índice par (0, 2, 4...), que serão os menores de cada par
//
// Retornar a soma final

const nums = [4, 12, 13, 2]

function arrayPair(nums) {
    nums.sort((a, b) => a - b)

    let resultado = 0

    for (let i = 0; i < nums.length; i += 2) {
        resultado += nums[i]
    }
    return resultado
}

console.log(arrayPair(nums))

