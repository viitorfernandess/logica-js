// Dado dois arrays,
// retorne os elementos que existem em ambos,
// sem repetir valores no resultado.

const arr1 = [1, 2, 1, 2]
const arr2 = [2, 3]

function intersection(arr1, arr2) {
    let newArr = []

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                if (!newArr.includes(arr2[j])) {
                    newArr.push(arr2[j])
                }
            }
        }
    }
    return newArr
}




console.log(intersection(arr1, arr2))