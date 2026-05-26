const nums = [2, 7, 11, 15]
const target = 9

function twoSum(nums, target) {
    const map = {}

    for (let i = 0; i < nums.length; i++) {
        const complemento = target - nums[i]

        if (map[complemento] !== undefined) {
            return [map[complemento], i]
        }

        map[nums[i]] = i
    }
}

console.log(twoSum(nums, target))