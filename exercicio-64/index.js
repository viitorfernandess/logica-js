const arr = [1, 2, 1, 2, 3]

function numIdenticalPairs(arr) {
    let pairs = 0

    for (let i = 0; i < arr.length; i++) {
        for ( let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                pairs++
            }
        }
    }
    return pairs
   
}

console.log(numIdenticalPairs(arr))

  