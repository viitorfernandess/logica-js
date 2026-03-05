// FizzBuzz tubinado: Escrever uma função que recebe um número n
// e imprime todos os números de 1 até n, 

function contar(n) {
    const numeros = []

    for (let i = 1; i <= n; i++) {
        numeros.push(i)
    }

    return numeros

}

const resultado = contar(10)
console.log(resultado)