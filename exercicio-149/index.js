// Divide o array original em subarrays de tamanho size.
// O último bloco pode conter menos elementos caso não seja possível completar o tamanho.
// Retorna um array contendo todos os blocos, sem utilizar _.chunk do Lodash.

function chunkedArray(arr, size) {
    const resultado = []

    for (let i = 0; i < arr.length; i += size) {
        resultado.push(arr.slice(i, i + size))
    }
    return resultado
}

console.log(chunkedArray([1, 2, 3, 4, 5, 6], 2))