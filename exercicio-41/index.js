function arrayRankTransform(arr) {
    const sorted = [...arr].sort((a, b) => a - b)

    let map = {}
    let rank = 1

    for (let i = 0; i < sorted.length; i++) {
        let valor = sorted[i]

        if (map[valor] === undefined) {
            map[valor] = rank
            rank++
        }
    }

    let result = []

    for ( let i = 0; i < arr.length; i++) {
        result.push(map[arr[i]])
    }

    return result
}

const arr = [12, 10, 34, 20]

console.log(arrayRankTransform(arr))


