/*
Dado um endereço IPv4 válido, substitua cada ponto (".") por "[.]"
e retorne o novo endereço IP modificado (defanged).
*/

const address = "1.1.1.1"

function defangIpAdrr(address) {
    let newAddress = ""
    for (let i = 0; i < address.length; i++) {
        if (address[i] === ".") {
            newAddress += "[.]"
        } else {
            newAddress += address[i]
        }
    }

    return newAddress
}

console.log(defangIpAdrr(address))