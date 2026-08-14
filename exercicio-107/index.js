// Implementar uma pilha LIFO usando apenas duas filas FIFO,
// utilizando as operações permitidas de uma fila.

class MyStack {
    constructor() {
        this.queue1 = []
        this.queue2 = []
    }

    push(x) {
        this.queue2.push(x)

        while (this.queue1.length > 0) {
            const elemento = this.queue1.shift()
            this.queue2.push(elemento)
        }

        while (this.queue2.length > 0) {
            const elemento = this.queue2.shift()
            this.queue1.push(elemento)
        }
    }
}

const stack = new MyStack()

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.queue1)
