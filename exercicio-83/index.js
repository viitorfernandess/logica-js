/*
Dado um array de inteiros arr, retorne true se existirem
três números ímpares consecutivos no array.
Caso contrário, retorne false.
*/

const nums = [1, 2, 34, 3, 4, 5, 7, 23, 12]

function threeConsecutiveOdds(nums) {
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            count++
            if (count === 3) {
                return true
            }
        } else {
            count = 0
        }
    }
    return false
}

console.log(threeConsecutiveOdds(nums))