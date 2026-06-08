/*
Dada a raiz de uma árvore binária, retornar a soma de todas as folhas à esquerda.

Uma folha é um nó sem filhos.
Uma folha à esquerda é uma folha que é filha esquerda de outro nó.

Exemplo:
      3
     / \
    9   20
       /  \
      15   7

Folhas à esquerda: 9 e 15
Resultado: 24
*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(
        20,
        new TreeNode(15),
        new TreeNode(7)
    )
)

function sumOfLeftLeaves(root) {
    let sum = 0

    //     DFS = Depth-First Search
    // Busca em Profundidade
    function dfs(node) {
        if (node === null) {
            return
        }

        if (
            node.left &&
            node.left.left === null &&
            node.left.right === null
        ) {
            sum += node.left.val
        }

        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)

    return sum
}

console.log(sumOfLeftLeaves(root))