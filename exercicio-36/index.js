
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


function printList(head) {
  let current = head

  while ( current !== null) {
    console.log(current.val)
    current = current.next
  }
}

console.log(printList(head))