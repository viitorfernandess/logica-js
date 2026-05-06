class ListNode {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

// Montando a lista [1,2,3,4,5]
const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)

// Crie uma função que recebe o head e retorna quantos nós existem.

function countNodes(head) {
    let soma = 0
    let current = head

    while (current !== null) {
        soma++
        current = current.next
    }
    return soma
}

console.log(countNodes(head))