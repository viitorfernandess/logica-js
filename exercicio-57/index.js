const nums = [1, 4, 3, 2]

function arrayPairSum(nums) {
    let soma = 0

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i += 2) {
        soma += nums[i]
    }
    return soma
}

console.log(arrayPairSum(nums))