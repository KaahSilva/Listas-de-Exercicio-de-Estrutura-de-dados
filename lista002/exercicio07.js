// Dado uma pilha que armazene números, escreva uma função que forneça o
// maior, o menor e a média aritmética dos elementos da pilha.

function numerosInfo() {
    
    let numeros=[2,33,4]
    let maior = 0;
    let menor = Infinity;
    let soma = 0;
    let tamanho = numeros.length;
  
    for (let i = 0; i < tamanho; i++) {
      let numero = numeros.pop();
  
      if (numero > maior) {
        maior = numero;
      }
      if (numero < menor) {
        menor = numero;
      }
  
      soma += numero;

    }

    let media = soma/tamanho
 console.log( `o maior numero é ${maior}`)
  console.log( `o menor numero é ${menor}`)
  console.log( `a media numero é ${media}`)
 
}

numerosInfo()
