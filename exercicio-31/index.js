const nums = [1, 1, 2]

function singleNumber(nums) {
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i]
        }

        return nums[nums.length - 1]
    }
}

console.log(singleNumber(nums))

