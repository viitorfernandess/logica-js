// Verifique se o uso de letras maiúsculas na palavra está correto:
// todas maiúsculas, todas minúsculas ou apenas a primeira maiúscula.

function detectCapital(string) {

    if (string === string.toUpperCase()) {
        return true
    }

    if (string === string.toLowerCase()) {
        return true
    }

    if (
        string[0] === string[0].toUpperCase() &&
        string.slice(1) === string.slice(1).toLowerCase()
    ) {
        return true
    }

    return false
}

console.log(detectCapital("Google"))