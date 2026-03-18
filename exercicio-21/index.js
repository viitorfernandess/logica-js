/*
104. Maximum Depth of Binary Tree

Exercício:

Dada a raiz (root) de uma árvore binária, retorne a sua profundidade máxima.

A profundidade máxima é o número de nós no caminho mais longo
da raiz até uma folha.

Uma folha é um nó que não possui filhos.

Exemplo 1:

Entrada:
root = [3,9,20,null,null,15,7]

Árvore:
      3
     / \
    9   20
        / \
       15  7

Saída:
3

Explicação:
O caminho mais longo da raiz até uma folha tem 3 nós.

Exemplo 2:

Entrada:
root = [1,null,2]

Árvore:
1
 \
  2

Saída:
2

Explicação:
O caminho mais longo da raiz até uma folha tem 2 nós.

Objetivo:
Implementar uma função que calcule a profundidade máxima da árvore.
*/

// Molde do nó
class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// Montando a árvore [3, 9, 20, null, null, 15, 7]
const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left  =new TreeNode(15)
root.right.right = new TreeNode(7)

// Cálculo da profundidade da árvore
function maxDepth(root) {
  // caso base: árvore vazia
  if(root === null) return 0

  //recursão: profundidade de cada subárvore
  const left = maxDepth(root.left)
  const right = maxDepth(root.right)

  // +1 conta o nó atual
  return Math.max(left, right) +1
}

// Execução
console.log(maxDepth(root))