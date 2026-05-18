// Dado um array de números inteiros, retorne quantos números são maiores que a média do array.

const arr = [1, 2, 3, 4, 5]

function sumArr(arr) {
    let contador = 0
    let soma = 0
    let media = 0

    for (let i = 0; i < arr.length; i++) {
        soma += arr[i]
        
    }
    media = (soma / arr.length)

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > media) {
            contador++
        }
    }
    return contador
}

console.log(sumArr(arr))