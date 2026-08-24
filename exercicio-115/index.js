// Receber um array com as pontuações dos atletas e retornar um novo array
// contendo a classificação de cada atleta, mantendo a ordem original.
// Os 3 primeiros colocados recebem as medalhas correspondentes e,
// a partir do 4º colocado, a classificação é representada pelo número da posição.

function relativeRank(score) {

    const scoreOrdenado = [...score]

    scoreOrdenado.sort((a, b) => b - a)

    const answer = []

    for (let i = 0; i < score.length; i++) {
        const posicao = scoreOrdenado.indexOf(score[i])

        const ranking = posicao + 1

        if (ranking === 1) {
            answer.push("Gold Medal")
        } else if (ranking === 2) {
            answer.push("Silver Medal")
        } else if (ranking === 3) {
            answer.push("Bronze Medal")
        } else {
            answer.push(String(ranking))
        }
    }

    return answer
}

console.log(relativeRank([10, 3, 8, 9, 4]))