// Objetivo: criar uma pirâmide de # com altura definida pelo usuário.
//
// 1. Pedir ao usuário um número inteiro entre 1 e 8.
// 2. Validar a entrada (repetir enquanto for inválida).
// 3. Para cada linha:
//    - imprimir espaços à esquerda (altura - linha)
//    - imprimir hashes (#) de acordo com a linha
// 4. Exibir a pirâmide alinhada à direita no terminal.
const prompt = require('prompt-sync')()

let altura

do {
    altura = Number(prompt('Tamanho: '))

    if (altura < 1 || altura > 8 || !Number.isInteger(altura)) {
        console.log('Preencha uma altura válida.')
    }
} while (altura < 1 || altura > 8 || !Number.isInteger(altura)) 

for (i = 1; i <= altura; i++) {
    let linha = ''
}





