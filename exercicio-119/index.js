// O exercício pede para verificar se o jogador que começa o jogo
// consegue vencer, sabendo que a cada rodada pode remover de 1 a 3 pedras.
// A estratégia vencedora é deixar sempre um múltiplo de 4 para o adversário.
// Portanto, se n for múltiplo de 4, o jogador perde; caso contrário, vence.

function canWinNim(n) {
    if (n % 4 !== 0) {
        return true
    }
    return false
}

console.log(canWinNim(8))