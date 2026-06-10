/*
Merge Sorted Array

Dado dois arrays ordenados em ordem não decrescente, nums1 e nums2,
e dois inteiros m e n representando a quantidade de elementos válidos
em cada array.

Mescle os elementos de nums2 em nums1, mantendo a ordem crescente.

Observações:
- nums1 possui tamanho m + n.
- Os primeiros m elementos de nums1 são válidos.
- Os últimos n elementos de nums1 são zeros e servem apenas como espaço extra.
- nums2 possui n elementos válidos.
- O resultado final deve ser armazenado diretamente em nums1.
- Não é necessário retornar um novo array.

Exemplo:

nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3

Resultado:
nums1 = [1,2,2,3,5,6]
*/

nums1 = [1, 2, 3, 0, 0, 0]
m = 3

nums2 = [2, 5, 6]
n = 3

function merge(nums1, m, nums2, n) {
    const merged = [
        ...nums1.slice(0, m),
        ...nums2
    ]

    merged.sort((a, b) => a - b)

    for (let i = 0; i < merged.length; i++) {
        nums1[i] = merged[i]
    }

    return nums1
}

console.log(merge(nums1, m, nums2, n))