/*
Dado os arrays nums e index, criar um array target vazio.

Para cada posição i:
- pegar o valor nums[i]
- inserir esse valor na posição index[i] dentro de target

Retornar o array target após todas as inserções.
*/

const nums = [0,1,2,3,4]
const position = [0,1,2,2,1]

function createTargetArr(nums, position) {
    let targetArr = []

    for (let i = 0; i < nums.length; i++) {
        
        targetArr.splice(position[i], 0, nums[i])
    }

    return targetArr

}

console.log(createTargetArr(nums, position))
