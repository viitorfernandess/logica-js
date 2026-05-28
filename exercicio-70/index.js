// O exercício pede para calcular a soma final das pontuações
// seguindo as operações especiais do jogo de baseball.

const points = ["5", "-2", "4", "C", "D", "9", "+", "+"]

function calPoints(points) {
    let result = []

    for (let i = 0; i < points.length; i++) {
        if (!isNaN(points[i])) {
            result.push(Number(points[i]))
        }
        else if (points[i] === "C") {
            result.pop()
        }

        else if (points[i] === "D") {
            let last = result[result.length - 1]
            result.push(last * 2)
        }

        else if (points[i] === "+") {
            let last = result[result.length - 1]
            let secondlast = result[result.length - 2]

            result.push(last + secondlast)
        }
    }

    let total = 0
    for (let num of result) {
        total += num
    }

    return total
}

console.log(calPoints(points))