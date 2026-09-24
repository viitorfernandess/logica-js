// Dado um número de moedas, construir o maior número possível de linhas completas, sabendo que cada linha precisa de uma moeda a mais que a anterior.

function arrangeCoins(num) {
    let linha = 1
    let resultado = 0

    while (linha <= num) {
        num = num - linha
        resultado++
        linha++

    }
    return resultado
}

console.log(arrangeCoins(6))