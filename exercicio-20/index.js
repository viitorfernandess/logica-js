/*
Exercício:

Dadas duas strings, needle e haystack, retorne o índice da primeira ocorrência
de needle dentro de haystack. Caso needle não faça parte de haystack, retorne -1.

Exemplos:

1)
Input:
haystack = "sadbutsad"
needle = "sad"

Output:
0

Explicação:
"sad" aparece nos índices 0 e 6, mas a primeira ocorrência é no índice 0.

2)
Input:
haystack = "leetcode"
needle = "leeto"

Output:
-1

Explicação:
"leeto" não aparece dentro de "leetcode".
*/

function searchString(haystack, needle) {

    for (i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle)
            return i
    }
    return -1
}

console.log(searchString("sadbutsad", "what"))