// Utiliza dois ponteiros para construir a permutação,
// escolhendo o menor número para I e o maior para D.

function diStringMatch(s) {
    const permut = []

    let left = 0
    let right = s.length

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I") {
            permut.push(left)
            left++
        } else {
            permut.push(right)
            right--
        }
    }
    permut.push(left)
    return permut
}

console.log(diStringMatch("IDIDIDI"))