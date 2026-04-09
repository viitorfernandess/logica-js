const acoes = [7, 1, 5, 3, 6, 4]

function lucroAcoes(acoes) {
   let menorPreco = acoes[0]
   let maiorLucro = 0
   
   for (let i = 0; i < acoes.length; i++) {
      let precoAtual = acoes[i]

      let lucroAtual = precoAtual - menorPreco

      if (lucroAtual > maiorLucro) {
         maiorLucro = lucroAtual
      }

      if (precoAtual < menorPreco) {
         menorPreco = precoAtual
      }
   }

   return maiorLucro
}

console.log(lucroAcoes(acoes))

