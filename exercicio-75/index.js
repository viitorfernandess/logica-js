/*
Verificar se a string n é uma subsequência de m.

Uma subsequência é formada quando todos os caracteres de n
aparecem em m na mesma ordem, sem a necessidade de estarem juntos.

Retornar true se n for uma subsequência de m, caso contrário retornar false.
*/

function isSubsequence(n, m) {
    let i = 0
    let j = 0

    while (i < n.length && j < m.length) {
        if (n[i] === m[j]) {
            i++
        }

        j++
    }

    return i === n.length
}

console.log(isSubsequence("abc", "adbf"))