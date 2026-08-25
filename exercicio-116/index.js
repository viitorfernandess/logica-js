// Retorna o menor múltiplo positivo de k que não está presente no array nums.
// Gera os múltiplos de k começando por k e continua enquanto eles estiverem no array.
// Quando encontra um múltiplo que não existe em nums, retorna esse valor.

function missingMultiple(nums, k) {
    let i = 1
    let multiple = k * 1

    while (nums.includes(multiple)) {
        i++
        multiple = k * i
    }
    return multiple
}

console.log(missingMultiple([8, 2, 3, 4, 6, 10, 12], 2))
