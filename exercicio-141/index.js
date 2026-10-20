// O exercício pede para encontrar o próximo elemento maior à direita
// de cada elemento de nums1, utilizando o array nums2.
// Se não existir um elemento maior, deve retornar -1.
// O resultado deve ser armazenado em um novo array.


function nextGreaterElement(nums1, nums2) {
    const newArr = []

    for (let i = 0; i < nums1.length; i++) {
        let encontrou = false
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                for (let k = j + 1; k < nums2.length; k++) {
                    if (nums2[k] > nums2[j]) {
                        newArr.push(nums2[k])
                        encontrou = true
                        break
                    }
                }
                if (!encontrou) {
                    newArr.push(-1)
                }
            }
        }
    }

    return newArr
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))