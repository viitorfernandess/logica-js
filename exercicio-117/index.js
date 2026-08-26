// O exercício pede para verificar se a string "s" pode ser transformada
// em "goal" realizando rotações, onde o primeiro caractere é movido
// para o final da string a cada rotação.

function rotateString(s, goal) {
    for (let i = 0; i < s.length; i++) {
        s = s.slice(1) + s[0]

        if (s === goal) {
            return true
        }
    }
    return false
}

console.log(rotateString("abcde", "cdeab"))