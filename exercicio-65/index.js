const arr = [3, 100, 200, 1, 2]

function longestConsecutive(arr) {
    arr.sort((a, b) => a - b)

    let currentSequence = 1
    let maxSequence = 1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            continue
        }

        if (arr[i] + 1 === arr[i + 1]) {
            currentSequence++
        } else {
            maxSequence = Math.max(maxSequence, currentSequence)
            currentSequence = 1
        }
    }

    return maxSequence
}

console.log(longestConsecutive(arr))