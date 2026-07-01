// Dado um número inteiro, calcular o produto e a soma de seus dígitos.
// Retornar a diferença entre o produto dos dígitos e a soma dos dígitos.

const num = 543

function subtractProductAndSum(num) {
    const digits = String(num)
    let sum = 0
    let product = 1

    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i])
        product *= Number(digits[i])
    }

    return product - sum
}

console.log(subtractProductAndSum(num))