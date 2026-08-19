// Dado um número de moedas, construir uma escada onde a primeira linha possui 1 moeda,
// a segunda possui 2, a terceira possui 3 e assim por diante.
// Retornar o número de linhas que foram completamente preenchidas.

function arrangeCoins(n) {
    let linha = 1
    let completas = 0

    while (n >= linha) {
        n -= linha
        linha++
        completas++
    }

    return completas
}

console.log(arrangeCoins(5))