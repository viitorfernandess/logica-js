const pessoa = {
    idade: 17,
    renda: 3000,
    pcd: false
}

// Decidir se uma pessoa pode receber o benefício ou não

if ((pessoa.idade >= 60 || pessoa.idade < 18 || pessoa.pcd == true) && pessoa.renda <= 3000) {
    console.log("Benefício aprovado!")
} else {
    console.log("Bnefício negado!")
}