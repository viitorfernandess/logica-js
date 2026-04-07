/*
Dado um número inteiro x, retorne true se ele for um palíndromo,
e false caso contrário.

Um palíndromo é um número que é igual quando lido de trás para frente.

Exemplos:
- 121 → true
- -121 → false (por causa do sinal negativo)
- 10 → false (invertido vira 01)

Restrições:
- x está entre -2^31 e 2^31 - 1
*/

const num = "121"

function palindromo(num) {
    let invertido = ""

    for (let i = num.length - 1; i >= 0; i--) {
        invertido += num[i]
    }

    if (invertido === num) {
        return true
    } else {
        return false
    }
}

console.log(palindromo(num))