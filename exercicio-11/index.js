const pessoas = [
  { nome: "Ana", idade: 17, renda: 1500, pcd: false },
  { nome: "Carlos", idade: 65, renda: 4000, pcd: false },
  { nome: "Marina", idade: 30, renda: 2000, pcd: true },
  { nome: "João", idade: 10, renda: 3500, pcd: false },
  { nome: "Fernanda", idade: 70, renda: 2500, pcd: false }
]

let aprovados = []
let negados = []

for (i = 0; i < pessoas.length; i++) {
  if ((pessoas[i].idade >= 60 || pessoas[i].idade < 18 || pessoas[i].pcd == true) && pessoas[i].renda <= 3000) {
    aprovados.push(pessoas[i])
  } else {
    negados.push(pessoas[i])
  }
}

console.log(aprovados)
console.log(negados)
