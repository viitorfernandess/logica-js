// O problema define duas variáveis (num e x) e uma operação que pode ser aplicada no máximo t vezes.
// Em cada operação, é possível aumentar ou diminuir x em 1 e, ao mesmo tempo, aumentar ou diminuir num em 1.
//
// O objetivo é encontrar o maior valor inicial possível de x tal que, após no máximo t operações,
// seja possível transformar x em num.
//
// Cada operação permite um “ajuste duplo” (x e num se movem juntos), então o efeito total máximo
// cresce proporcionalmente a 2 * t.
//
// Resultado final: x máximo = num + 2 * t

function maxPossibleX(num, t) {
    return num + 2 * t
}

console.log(maxPossibleX(4, 1)) // 6
console.log(maxPossibleX(3, 2)) // 7