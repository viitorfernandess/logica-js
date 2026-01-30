const numeros = [5, 8, 3, 10]

let soma = 0 //  Na minha cabeça eu tenho que guardar a soma dessa array nessa variável para retornar a resposta

for (i = 0; i <= numeros.length; i++) {
    soma = soma + numeros[i]
} // aqui ta a parte que eu somo os números que estão dentro do array

console.log(soma)