
// O objetivo é encontrar uma caixa de Alice e uma caixa de Bob
// para trocar, de modo que ambos terminem com a mesma quantidade
// total de doces. Para isso, calculamos os totais de cada um,
// encontramos metade da diferença entre os totais e procuramos
// duas caixas cuja diferença corresponda a esse valor.

function fairCandySwap(arrAlice, arrBob) {
    let aliceTotal = 0
    let bobTotal = 0

    for (let i = 0; i < arrAlice.length; i++) {
        aliceTotal += arrAlice[i]
    }

    for (let i = 0; i < arrBob.length; i++) {
        bobTotal += arrBob[i]
    }

    let difference
    if (aliceTotal > bobTotal) {
        difference = (aliceTotal - bobTotal) / 2

        for (let i = 0; i < arrAlice.length; i++) {
            for (let j = 0; j < arrBob.length; j++) {
                if (arrAlice[i] - arrBob[j] === difference)
                    return [arrAlice[i], arrBob[j]]
            }
        }
    } else {
        difference = (bobTotal - aliceTotal) / 2

        for (let i = 0; i < arrAlice.length; i++) {
            for (let j = 0; j < arrBob.length; j++) {
                if (arrBob[j] - arrAlice[i] === difference)
                    return [arrAlice[i], arrBob[j]]
            }
        }
    }
}

console.log(fairCandySwap([1, 2], [2, 3]))