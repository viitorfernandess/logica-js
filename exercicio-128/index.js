// O exercício pede para encontrar a maior quantidade de 1s consecutivos no array.

function findMaxConsecutiveOnes(nums) {
    let repetido = 0
    let maior = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            repetido++
        } else {
            repetido = 0
        }

        if (repetido > maior) {
            maior = repetido
        }
    }
    return maior
}