// FizzBuzz tubinado: Escrever uma função que recebe um número n
// e imprime todos os números de 1 até n, 

function contar(n) {
    const numeros = []

    for (let i = 1; i <= n; i++) {
        numeros.push(i)
    }

    return numeros
}

const lista = contar(10)
for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 3 === 0) {
        lista[i] = 'buzz'
    }
    else if (lista[i] % 5 === 0) {
        lista[i] = 'fizz'
    }
}

console.log(lista)



