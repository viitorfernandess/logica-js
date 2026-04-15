const s = "hellO"

function toLowerCase(s) {

    let newString = ""

    const arr = s.split('')

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            arr[i] = arr[i].toLowerCase()
        }
        newString += arr[i]
    }

    return newString
}

console.log(toLowerCase(s))