// Problema: Inverter uma lista ligada simples (singly linked list)
// Dado o nó inicial (head), devemos reverter a ordem dos nós,
// fazendo com que cada nó aponte para o anterior em vez do próximo.
// Exemplo: [1,2,3,4,5] -> [5,4,3,2,1]
// Desafio: resolver de forma iterativa e também recursiva.


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