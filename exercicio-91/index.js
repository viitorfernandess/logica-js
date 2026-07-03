/*
O problema pede a quantidade de maneiras de subir uma escada de n degraus,
podendo subir 1 ou 2 degraus por vez.

Para chegar ao degrau n, o último movimento só pode ter vindo de:
- n - 1 (subindo 1 degrau)
- n - 2 (subindo 2 degraus)

Portanto:

maneiras(n) = maneiras(n - 1) + maneiras(n - 2)

Casos base:
n = 1 -> 1 maneira
n = 2 -> 2 maneiras

Como cada resultado depende apenas dos dois anteriores, não é necessário
armazenar todas as respostas. Basta manter as duas últimas quantidades
(anterior e atual) e calcular a próxima até chegar em n.

Complexidade:
- Tempo: O(n)
- Espaço: O(1)
*/

function climbStairs(n) {
    let anterior = 1
    let atual = 2

    if (n === 1) return 1
    if (n === 2) return 2
    for (let i = 3; i <= n; i++) {
        const proximo = atual + anterior

        anterior = atual
        atual = proximo
    }

    return atual
}

console.log(climbStairs(11))