// O exercício pede para verificar se duas strings são isomórficas.
// Cada caractere de s deve sempre ser mapeado para o mesmo caractere de t, 
// e caracteres diferentes de s não podem ser mapeados para o mesmo caractere de t.

function isomorphicStrings(s, t) {

    if (s.length !== t.length) {
        return false
    }

    const mapa = {}

    const mapaInverso = {}

    for (let i = 0; i < s.length; i++) {
        if (s[i] in mapa) {

            if (mapa[s[i]] !== t[i]) {
                return false
            }
        } else {
            mapa[s[i]] = t[i]
        }
    }

    if (t[i] in mapaInverso) {

        if (mapaInverso[t[i]] !== s[i]) {
            return false
        }
    } else {
        mapaInverso[t[i]] = s[i]
    }
}

console.log(isomorphicStrings("aa", "cb"))