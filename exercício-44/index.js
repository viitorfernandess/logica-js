const nums = [1, 2, 3, 1]

function hasDuplicate(nums) {
    const map = {}

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in map) {
            return true
        }

        map[nums[i]] = true
    }

    return false
}