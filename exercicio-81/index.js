/*
Dado um array ordenado em ordem não decrescente,
retorne um novo array contendo o quadrado de cada
elemento também em ordem não decrescente.
*/

const nums = [0,1,9,16,100]

function sortedSquares(nums) {
    let newArr = []

    for (let i = 0; i <  nums.length; i++) {
        newArr.push(nums[i] * nums[i])
    }
    newArr.sort((a, b) => a - b)
    return newArr
}

console.log(sortedSquares(nums))