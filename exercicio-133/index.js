// Retorna o número do juiz da cidade.
// O juiz não confia em ninguém e todas as outras pessoas confiam nele.
// Se não existir um único juiz que atenda às condições, retorna -1.

function findJudge(n, trust) {
    if (n === 1) {
        return 1
    }

    if (trust.length !== n - 1) {
        return -1
    }

    let provavelJuiz = trust[0][1]

    for (let i = 0; i < trust.length; i++) {
        if (trust[i][1] !== provavelJuiz) {
            return -1
        }

        if (trust[i][0] === provavelJuiz) {
            return -1
        }
    }

    return provavelJuiz
}

console.log(findJudge(3, [[1, 3], [2, 3]]))