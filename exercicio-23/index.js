class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

function hasCycle(head) {
  let lento = head
  let rapido = head

  while (rapido !== null && rapido.next !== null) {
    lento = lento.next
    rapido = rapido.next.next

    if (lento === rapido) {
      return true
    }
  }

  return false
}

// // COM ciclo
// const head = new ListNode(3)
// head.next = new ListNode(2)
// head.next.next = new ListNode(0)
// head.next.next.next = new ListNode(-4)
// head.next.next.next.next = head.next;

// console.log(hasCycle(head)) // true

// SEM ciclo
const head2 = new ListNode(1)
console.log(hasCycle(head2)) // false