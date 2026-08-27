// Verificar se existem dois índices diferentes no array
// em que o valor de um elemento seja o dobro do outro.
// Retornar true caso encontre um par e false caso contrário.

function checkIfExist(arr) {
    let i = 0
    let j = 1

    while (i < arr.length) {
        while (j < arr.length) {
            if (i === j) {
                j++
                continue
            }
            if (arr[i] === 2 * arr[j]) {
                return true
            }
            j++
        }
        i++
        j = 0
    }
    return false
}

console.log(checkIfExist([10, 1, 5, 3]))