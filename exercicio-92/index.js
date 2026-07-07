// O problema pede para:
// 1. Formar um novo número com todos os dígitos diferentes de zero de n, mantendo a ordem original.
// 2. Calcular a soma dos dígitos desse novo número.
// 3. Retornar o resultado da multiplicação entre o novo número e a soma de seus dígitos.

function sumAndMultiply(n) {

    const str = String(n)
    let newString = ""

    for (const digit of str) {
        if (digit !== "0") {
            newString += digit
        }
    }

    let sum = 0

    for (const digit of newString) {
        sum += Number(digit)
    }

    return Number(newString) * sum
}

console.log(sumAndMultiply(10203004))