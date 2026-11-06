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
                    callbackAtaul => callbackAtaul !== callback
                )
            }
        }
    }
}