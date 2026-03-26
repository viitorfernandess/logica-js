//Cria o molde da árvore
class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

// raíz árvore p
const p = new TreeNode(1)
p.left = new TreeNode(2)
p.right = new TreeNode(3)

// raíz árvore q
const q = new TreeNode(1)
q.left = new TreeNode(2)
q.right = new TreeNode(2)

console.log(p, q)

function comparacao(p, q) {
    if (p === null && q === null) {
        return true
    }
    if (p === null || q === null) {
        return false
    }
    if (p.val !== q.val) {
        return false
    }
    return comparacao(p.left, q.left) && comparacao(p.right, q.right)
}

console.log(comparacao(p,q))