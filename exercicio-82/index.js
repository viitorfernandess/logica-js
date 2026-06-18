/*
Dado um número inteiro n, retorne a diferença entre
o produto dos seus dígitos e a soma dos seus dígitos.

Exemplo:
n = 234

Produto dos dígitos = 2 * 3 * 4 = 24
Soma dos dígitos = 2 + 3 + 4 = 9

Resultado = 24 - 9 = 15
*/

function subtractProductAndSum(n) {
    const digits = String(n)

    let sum = 0
    let product = 1

    for (let i =0; i < digits.length; i++) {
        const digit = Number(digits[i])

        sum += digit
        product *= digit
    }

    return product - sum
}

console.log(subtractProductAndSum(234))