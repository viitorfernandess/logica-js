// Crie uma função contador que receba um número n e retorne uma função.
// A função retornada deve devolver n na primeira chamada e incrementar
// o valor em 1 a cada chamada seguinte.

function createCounter(n) {
    let valor = n

    return function () {
        return valor++
    }
}

const counter = createCounter(10)

console.log(counter())
console.log(counter())