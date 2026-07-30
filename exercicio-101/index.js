// O exercício pede para encontrar o menor número de pressionamentos
// necessários para digitar uma palavra em um teclado de telefone
// onde as letras podem ser redistribuídas entre as teclas 2 a 9.
//
// Como as letras da palavra são distintas, não precisamos montar o teclado.
// Basta considerar a posição de cada letra na distribuição otimizada:
//
// - As primeiras 8 letras ficam na primeira posição das teclas (1 toque).
// - As próximas 8 letras ficam na segunda posição (2 toques).
// - As próximas 8 letras ficam na terceira posição (3 toques).
//
// O objetivo é calcular a soma mínima de pressionamentos.

function minimumPushes(word) {
    let total = 0

    for(let i = 0; i < word.length; i++) {
        total += Math.floor(i / 8) + 1
    }

    return total
}

console.log(minimumPushes("pandeiros"))