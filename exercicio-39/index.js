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


function findValue(head, target) {
    let current = head

    while (current !== null) {
        if (current.val === target) {
            return current
        }
        current = current.next
    }
    return null
}

console.log(findValue(head, 9))