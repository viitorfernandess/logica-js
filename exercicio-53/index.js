// O exercício pede para:
// 1. Receber um array com as alturas atuais dos alunos
// 2. Criar um array com a ordem correta das alturas (ordenado)
// 3. Comparar os dois arrays posição por posição
// 4. Contar quantas posições estão diferentes
// 5. Retornar a quantidade de alunos fora da posição esperada

const heights = [1, 1, 4, 2, 1, 3]

function orderHeight(heights) {
    let numbers = 0

    const expected = [...heights].sort((a, b) => a - b)

    for ( let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            numbers++
        }
    }
   return numbers
}

console.log(orderHeight(heights))