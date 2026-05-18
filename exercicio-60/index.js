const nums = [3, 2, 2, 3]
const target = 3

function removeElement(nums, target) {
    let k = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== target) {
            nums[k] = nums[i]

            k++
        }
    }

    return k
}

console.log(removeElement(nums, target))