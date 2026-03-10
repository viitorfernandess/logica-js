// Dado um array de números inteiros (nums) e um inteiro (target), retorne os índices dos dois números de forma que a soma deles seja igual ao target.

// Você pode assumir que cada entrada terá exatamente uma solução, e não pode usar o mesmo elemento duas vezes.



const nums = [2, 7, 11, 15]
const target = 9

function twoSums(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; i++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }

    }
}

console.log(twoSums(nums, target))