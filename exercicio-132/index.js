// Função fornecida pelo exercício.
// Compara o palpite com o número escolhido (pick).
function guess(num) {
    if (num > pick) {
        return -1 // palpite maior que o pick
    }

    if (num < pick) {
        return 1 // palpite menor que o pick
    }

    return 0 // palpite igual ao pick
}

// Encontra o número escolhido dentro do intervalo de 1 até n.
function guessNumber(n) {
    let inicio = 1
    let fim = n

    while (inicio <= fim) {
        // Calcula o meio do intervalo atual.
        let meio = Math.floor((inicio + fim) / 2)

        // Verifica se o meio é maior, menor ou igual ao pick.
        const resultado = guess(meio)

        if (resultado === 0) {
            return meio // encontrou o pick
        }

        if (resultado === 1) {
            inicio = meio + 1 // pick está na metade maior
        }

        if (resultado === -1) {
            fim = meio - 1 // pick está na metade menor
        }
    }
}