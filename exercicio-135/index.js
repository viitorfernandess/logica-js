// O exercício pede para verificar se a quantidade de ocorrências
// de cada valor do array é única.
// Primeiro contamos quantas vezes cada número aparece usando um Map.
// Depois verificamos se alguma dessas quantidades se repete.
// Se alguma quantidade aparecer mais de uma vez, retornamos false.
// Caso todas sejam diferentes, retornamos true.

function uniqueOccurrence(arr) {
    const mapa = new Map()

    for (let i = 0; i < arr.length; i++) {
        if (mapa.has(arr[i])) {
            mapa.set(arr[i], mapa.get(arr[i]) + 1)
        } else {
            mapa.set(arr[i], 1)
        }
    }

    const newArr = [...mapa.values()]
    for (let i = 0; i < newArr.length; i++) {
        if (newArr.includes(newArr[i], i + 1)) {
            return false
        }
    }
    return true
}

console.log(uniqueOccurrence([1, 2, 1, 2, 2, 3]))