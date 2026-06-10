/*
Dada a raiz de uma árvore binária, retornar a soma de todos os valores dos nós.

Percorrer toda a árvore utilizando DFS (recursão).
Para cada nó visitado:
- Somar o valor do nó atual ao resultado.
- Visitar a subárvore da esquerda.
- Visitar a subárvore da direita.

Ao final, retornar a soma total de todos os nós da árvore.

Exemplo:

      3
     / \
    9   20
       /  \
      15   7

Resultado:
3 + 9 + 20 + 15 + 7 = 54
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

function sumOfTree(root) {
    let sum = 0

    function dfs(node) {
        if (node === null) {
            return
        }
        sum += node.val

        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)

    return sum
}

console.log(sumOfTree(root))
