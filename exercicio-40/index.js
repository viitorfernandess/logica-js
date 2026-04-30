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


function removeValue(head, target) {

    while (head !== null && head.val === target) {
        head = head.next
    }

    let current = head
    let previous = null

    while (current !== null) {
        if (current.val === target) {
            previous.next = current.next
        } else {
            previous = current
        }

        current = current.next
    }
    return head
}

console.log(removeValue(head, 3))