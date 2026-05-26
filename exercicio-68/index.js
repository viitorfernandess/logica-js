const nums1 = [0, 3]
const nums2 = [1, 2, 2, 3]

function intersection(nums1, nums2) {
    const setNums2 = new Set(nums2)

    const resultado = new Set

    for (let i = 0; i < nums1.length; i++) {
        if (setNums2.has(nums1[i])) {
            resultado.add(nums1[i])
        }
    }

    return [...resultado]
}

console.log(intersection(nums1, nums2))