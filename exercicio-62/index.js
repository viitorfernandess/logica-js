// Dado um array de números inteiros,
// retorne true se existir algum número repetido.
//
// Retorne false caso todos os números sejam diferentes.
//
// Exemplo 1:
// Entrada: [1, 2, 3, 1]
// Saída: true
//
// Exemplo 2:
// Entrada: [1, 2, 3, 4]
// Saída: false
//
// Regras:
// - Resolver usando loops
// - Não usar métodos prontos como includes()
// - Tente pensar em comparação entre elementos

const arr = [ 1, 2, 3, 4, 5]

function hasDuplicate(arr) {

    for ( let i = 0; i < arr.length; i++) {
        for ( let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true
            }
        }
    }

    return false
}

console.log(hasDuplicate(arr))