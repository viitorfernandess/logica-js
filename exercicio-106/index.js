// Receber dois números não negativos representados como strings,
// realizar a soma sem converter os números inteiros diretamente
// e retornar o resultado também como uma string.

function addStrings(num1, num2) {
    let resultado = []
    let carry = 0
    let i = num1.length - 1
    let j = num2.length - 1

    while (i >= 0 || j >= 0 || carry > 0) {
        let digito1 = i >= 0 ? Number(num1[i]) : 0
        let digito2 = j >= 0 ? Number(num2[j]) : 0

        let soma = digito1 + digito2 + carry

        carry = Math.floor(soma / 10)
        let digito = soma % 10

        resultado.push(digito)
        i--
        j--
    }

    return resultado.reverse().join("")
}

console.log(addStrings("11", "111"))