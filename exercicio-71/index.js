/*
Dado um número inteiro n, retorne true se ele for uma potência de 4.
Caso contrário, retorne false.

Um número é uma potência de 4 se existir um inteiro x tal que:

n = 4^x

Exemplos:
16 -> true
5  -> false
1  -> true
*/

function isPowerOfFour(n) {
    let valor = 1

    while (valor <= n) {
      if ( valor === n) {
        return true
      }

      valor = valor * 4
    }

    return false
}
console.log(isPowerOfFour(12))