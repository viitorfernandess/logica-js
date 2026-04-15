function ListNode(val, next = null) {
    this.val = val
    this.next = next
}

function criarLista(arr) {
    let head = null
    let atual = null

    for (let i = 0; i < arr.length; i++) {
        const novoNo = new ListNode(arr[i])

        if (head === null) {
            head = novoNo
            atual = novoNo
        } else {
            atual.next = novoNo
            atual = novoNo
        }
    }

    return head
}

const head = criarLista([1, 2, 3, 4, 5])

let atual = head

while (atual !== null) {
    console.log(atual.val)
    atual = atual.next
}

function middleList(head) {
    let lento = head
    let rapido = head

    while (rapido !== null && rapido.next !== null) {
        lento = lento.next
        rapido = rapido.next.next
    }

    return lento
}

console.log(middleList(head))
