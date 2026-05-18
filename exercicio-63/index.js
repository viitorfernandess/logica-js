// Dado um array de números inteiros,
// retorne o maior número presente no array.
//
// Exemplo 1:
// Entrada: [1, 8, 3, 2]
//
// Saída:
// 8
//
// Exemplo 2:
// Entrada: [-10, -3, -50]
//
// Saída:
// -3
//
// Regras:
// - Resolver usando loop
// - Não usar Math.max()
// - Percorrer o array comparando os valores

const arr = [1, 8, 3, 2]


function findLargest(arr) {
    let maior = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (maior < arr[i]) {
            maior = arr[i]
        }
    }

    return maior
}

console.log(findLargest(arr))