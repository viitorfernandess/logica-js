const nums = [2, 7, 11, 15]
const target = 9

// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// }

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