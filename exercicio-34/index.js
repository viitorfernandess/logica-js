const nums1 = [0, 3]
const nums2 = [1, 2, 2, 3]

function intersection(nums1, nums2) {

    let numIgual = []

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j] && !numIgual.includes(nums1[i])) {
                numIgual.push(nums1[i])
            } 
        }
    }
    return numIgual
}

console.log(intersection(nums1, nums2))


// function intersection(nums1, nums2) {
//     // Cria um Set a partir do nums1
//     // 👉 Remove automaticamente valores duplicados
//     // 👉 Ex: [2,2] vira {2}
//     // 👉 Também permite busca rápida: set1.has(valor) é O(1)
//     const set1 = new Set(nums1)

//     // Cria um Set vazio para armazenar o resultado
//     // 👉 Usamos Set porque ele NÃO permite duplicados
//     // 👉 Então mesmo que encontremos o mesmo número várias vezes,
//     //    ele só será armazenado uma única vez
//     const resultado = new Set()

//     // Percorre cada elemento do segundo array (nums2)
//     // 👉 "num" vai assumir cada valor do array, um por vez
//     // 👉 Ex: [1,2,2,1] → num = 1, depois 2, depois 2, depois 1
//     for (let num of nums2) {

//         // Verifica se o número atual existe dentro do set1
//         // 👉 Ou seja: esse número também existe no nums1?
//         // 👉 Ex: set1 = {2}
//         //    num = 1 → false
//         //    num = 2 → true
//         if (set1.has(num)) {

//             // Se existir nos dois arrays, adiciona no resultado
//             // 👉 Como resultado é um Set:
//             //    - não adiciona duplicados
//             //    - se já tiver o valor, ignora automaticamente
//             // 👉 Ex: tentar adicionar 2 várias vezes → continua sendo {2}
//             resultado.add(num)
//         }
//     }

//     // Converte o Set em array antes de retornar
//     // 👉 Porque o problema espera um array, não um Set
//     // 👉 O operador "..." (spread) pega os valores do Set
//     //    e transforma em array
//     // 👉 Ex: {2} → [2]
//     return [...resultado]
// }