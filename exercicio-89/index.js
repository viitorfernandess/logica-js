// Dado um número inteiro, somar repetidamente todos os seus dígitos
// até que o resultado tenha apenas um dígito.
// Retornar esse dígito.

const num = 38

function addDigits(num) {
    while ( num >= 10) {
        const digits = String(num)
        let sum = 0

        for (let i = 0; i < digits.length; i++) {
            sum += Number(digits[i])
        }

        num = sum
    }

    return num

}

console.log(addDigits(num))