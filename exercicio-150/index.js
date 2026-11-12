// Implementa um EventEmitter para registrar, executar e cancelar callbacks associados a eventos.

class EventEmitter {
    constructor() {
        this.event = {}
    }

    subscribe(event, callback) {
        if (!this.event[event]) {
            this.event[event] = []
        }
        this.event[event].push(callback)

        return {
            unsubscribe: () => {
                this.event[event] = this.event[event].filter(
                    callbackAtual => callbackAtual !== callback
                )
            }
        }
    }

    emit(event, args) {
        const result = []

        if (!this.event[event]) {
            return result
        }

        for (let i = 0; i < this.event[event].length; i++) {
            result.push(this.event[event][i](...args))
        }
        return result
    }
}

const emitter = new EventEmitter()

const subscription = emitter.subscribe('message', () => 'Olá')
emitter.subscribe('message', () => 'Mundo')

console.log(emitter.emit('message', []))

subscription.unsubscribe()

console.log(emitter.emit('message', []))