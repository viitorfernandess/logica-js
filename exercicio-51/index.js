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

// Verificar se um valor existe na linked list.

function includes(head, target) {
    let current = head

    while (current !== null) {
        if (current.val === target) {
            return true
        }
        current = current.next
    }

    return false
}

console.log(includes(head, 3))