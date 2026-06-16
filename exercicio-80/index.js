/*
Dada uma string contendo os movimentos de um robô
('R', 'L', 'U' e 'D'), determine se ele retorna
à posição inicial (0, 0) após executar todos
os movimentos.

Retorne true se voltar à origem e false caso contrário.
*/

const string = "UULLRU"

function returnToOrigin(string) {
    let x = 0
    let y = 0

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "L") {
            x--
        }
        else if (string[i] === "R") {
            x++
        }
        else if (string[i] === "U") {
            y++
        }
        else if (string[i] === "D") {
            y--
        }
    }

    if (x === 0 && y === 0) {
        return true
    } else {
        return false
    }
}

console.log(returnToOrigin(string))