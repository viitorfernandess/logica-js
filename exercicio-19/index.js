/*
Exercício: Number Complement

Descrição:
O complemento de um número inteiro é o número obtido ao inverter todos os
bits (0 vira 1 e 1 vira 0) da sua representação em binário.

Exemplo:
5 em binário = 101
Complemento = 010
Resultado em decimal = 2

Dado um número inteiro n, retorne o seu complemento.

Exemplos:

Entrada: n = 5
Saída: 2

Entrada: n = 7
Saída: 0

Entrada: n = 10
Saída: 5

Restrição:
0 ≤ n < 10^9
*/

function findComplement(n) {
    let binario = n.toString(2)
    let newString = ""
    for (let i = 0; i < binario.length; i++) {
        if (binario[i] === "0") {
            newString += "1"
        } else {
            newString += "0"
        }
    }

    let decimal = parseInt(newString, 2)
    return decimal
}

console.log(findComplement(5))



