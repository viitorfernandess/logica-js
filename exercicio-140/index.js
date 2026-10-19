// Verifica se uma string possui parênteses, colchetes e chaves válidos,
// garantindo que todos os símbolos sejam fechados na ordem correta.

function validParentheses(s) {

    const pilha = []

    for (let i = 0; i < s.length; i++) {
        const caractere = s[i]

        if (caractere === "(" || caractere === "[" || caractere === "{") {
            pilha.push(caractere)
        } else {
            if (pilha.length === 0) {
                return false
            }
             if (caractere === ")" && pilha[pilha.length - 1] !== "(") {
            return false
        }

        if (caractere === "]" && pilha[pilha.length - 1] !== "[") {
            return false
        }

        if (caractere === "}" && pilha[pilha.length - 1] !== "{") {
            return false
        }
        pilha.pop()
        }

    }

    return pilha.length === 0
}

console.log(validParentheses("([])"))