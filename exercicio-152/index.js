// Retorna uma função que sempre devolve "Hello World", independentemente dos argumentos recebidos.

function createHelloWorld() {
    return function() {
        return "Hello World"
    }
}

const f = createHelloWorld()

console.log(f())