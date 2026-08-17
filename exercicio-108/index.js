// Dada uma string balanceada, dividir em substrings balanceadas e retornar a quantidade máxima de substrings obtidas.

function balancedString(string) {
    let contador = 0
    let countR = 0
    let countL = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "R") {
            countR++
        }

        if (string[i] === "L") {
            countL++
        }

        if (countR === countL) {
            contador++
            countL = 0
            countR = 0
        }
    }
    return contador
}

console.log(balancedString("RLRRLLRLRL"))