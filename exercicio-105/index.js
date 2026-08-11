
function createCounter(n) {
    let valor = n

    return function () {
        return valor++
    }
}

const counter = createCounter(10)

console.log(counter())
console.log(counter())