// Dada uma matriz de contas bancárias,
// somar o dinheiro de cada cliente (linha)
// e retornar a maior riqueza encontrada.

const accounts = [[1, 5],
[7, 3],
[3, 5]
]

function maximumWealth(accounts) {

    let maiorRiqueza = 0

    for (let i = 0; i < accounts.length; i++) {
        let soma = 0
        for (let j = 0; j < accounts[i].length; j++) {
            soma += accounts[i][j]
        }

        if (soma > maiorRiqueza) {
            maiorRiqueza = soma
        }
    }
    return maiorRiqueza
}

console.log(maximumWealth(accounts))

