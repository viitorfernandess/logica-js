class RecentCounter {
    constructor() {
        this.requests = []
    }

    ping(t) {
        this.requests.push(t)

        const inicio = t - 3000

        while (this.requests[0] < inicio) {
            this.requests.shift()
        }
        return this.requests.length
    }
}

// Testando o algoritmo
const recentCounter = new RecentCounter();

console.log(recentCounter.ping(1))
console.log(recentCounter.ping(100))
console.log(recentCounter.ping(3001))
console.log(recentCounter.ping(3002))
