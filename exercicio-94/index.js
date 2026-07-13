/*
Dado um array com o fator de ganância de cada criança e outro com o tamanho
de cada biscoito, distribua no máximo um biscoito para cada criança de forma
que o maior número possível delas fique satisfeito.

Uma criança fica satisfeita se receber um biscoito com tamanho maior ou igual
ao seu fator de ganância.

Retorne a quantidade máxima de crianças satisfeitas.
*/

const criancas = [1, 2]
const biscoitos = [1, 1, 1]

function findContentChildren(criancas, biscoitos) {
    criancas.sort((a, b) => a - b)
    biscoitos.sort((a, b) => a - b)

    let contador = 0
    let i = 0
    let j = 0
    while (i < criancas.length && j < biscoitos.length) {
        if (biscoitos[j] >= criancas[i]) {
            contador++

            i++
            j++
        } else {
            j++
        }
    }

    return contador
}

console.log(findContentChildren(criancas, biscoitos))