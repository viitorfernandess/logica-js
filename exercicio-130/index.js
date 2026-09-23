// Conta a quantidade de cada letra em s e compara com t para identificar a letra adicionada.

function findTheDifference(s, t) {
    const mapa = new Map()

    for (let i = 0; i < s.length; i++) {
        if (mapa.has(s[i])) {
            mapa.set(s[i], mapa.get(s[i]) + 1)
        } else {
            mapa.set(s[i], 1)
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!mapa.has(t[i])) {
            return t[i]
        }

        if (mapa.get(t[i]) === 0) {
            return t[i]
        }

        mapa.set(t[i], mapa.get(t[i]) - 1)
    }
}

console.log(findTheDifference("aabb", "aabbb"))