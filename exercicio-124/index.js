// O exercício pede para retornar todos os horários possíveis de um relógio binário
// que tenham exatamente a quantidade de LEDs acesos informada em turnedOn.
// As horas vão de 0 a 11 e os minutos de 0 a 59.
// Para cada combinação de hora e minuto, devemos contar os bits 1
// de cada número em binário e verificar se a soma é igual a turnedOn.

function binaryWatch(turnedOn) {
    let resultado = []

    for (let hora = 0; hora <= 11; hora++) {
        let sumHora = 0
        let binarioHora = hora.toString(2)

        for (let i = 0; i < binarioHora.length; i++) {
            if (binarioHora[i] === "1") {
                sumHora++
            }
        }

        for (let minuto = 0; minuto <= 59; minuto++) {
            let sumMinuto = 0
            let binarioMinuto = minuto.toString(2)

            for (let i = 0; i < binarioMinuto.length; i++) {
                if (binarioMinuto[i] === "1") {
                    sumMinuto++
                }
            }

            if (sumHora + sumMinuto === turnedOn) {
                let minutoFormatado = sumMinuto.toString().padStart(2, "0")

                resultado.push(`${hora}:${minutoFormatado}`)
            }
        }
    }

    return resultado
}

console.log(binaryWatch(4))