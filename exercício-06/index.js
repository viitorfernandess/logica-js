const pessoas = [
    { nome: "Ana", idade: 65, deficiencia: false, statusEspecial: false },
    { nome: "Bruno", idade: 30, deficiencia: true, statusEspecial: false },
    { nome: "Carla", idade: 40, deficiencia: false, statusEspecial: true },
    { nome: "Diego", idade: 25, deficiencia: false, statusEspecial: false },
    { nome: "Vitor", idade: 27, deficiencia: false, statusEspecial: false }
]

for (i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade >= 60) {
        console.log(pessoas[i].nome, " - grupo 60+")
    } else if (pessoas[i].deficiencia) {
        console.log(pessoas[i].nome, " - grupo deficiência")
    } else if (pessoas[i].statusEspecial) {
        console.log(pessoas[i].nome, " - grupo Status Especial")
    } else {
        console.log(pessoas[i].nome, " - grupo normal")
    }
}