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

// Encontrar o maior valor dentro da linked list.

function findMax(head) {
    let current = head
    let max = head.val

    while (current !== null) {
        if (current.val > max) {
            max = current.val
        }

        current = current.next
    }

    return max
}

console.log(findMax(head))