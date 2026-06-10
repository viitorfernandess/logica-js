/*
Dado três arrays de mesmo tamanho:

- code: código do cupom
- businessLine: categoria do cupom
- isActive: indica se o cupom está ativo

Retornar um array contendo apenas os códigos dos cupons válidos.

Um cupom é válido quando:

1. O código não está vazio.
2. O código contém apenas:
   - letras (a-z, A-Z)
   - números (0-9)
   - underscore (_)
3. A categoria é uma das seguintes:
   - electronics
   - grocery
   - pharmacy
   - restaurant
4. O cupom está ativo (isActive === true).

Após filtrar os cupons válidos:

- Ordenar primeiro pela categoria (businessLine) na ordem:
  electronics -> grocery -> pharmacy -> restaurant

- Em seguida, ordenar os códigos em ordem alfabética crescente
  dentro de cada categoria.

Retornar o array final contendo apenas os códigos válidos já ordenados.
*/

const code = ["SAVE20", "", "PHARMA5", "SAVE@20"]
const businessLine = ["restaurant", "grocery", "pharmacy", "restaurant"]
const isActive = [true, true, false, false]

function validator(code, businessLine, isActive) {
    const newArr = []

    for (let i = 0; i < code.length; i++) {
        const validCode = /^[a-zA-Z0-9_]+$/.test(code[i])

        const validBusiness =
            businessLine[i] === "eltronic" ||
            businessLine[i] === "restaurant" ||
            businessLine[i] === "grocery" ||
            businessLine[i] === "pharmacy"

        if (
            code[i].length > 0 &&
            validCode &&
            validBusiness &&
            isActive[i]
        ) {
            newArr.push(code[i])
        }
    }
    return newArr
}

console.log(validator(code, businessLine, isActive))