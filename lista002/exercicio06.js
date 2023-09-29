// Dado uma pilha que armazene números, escreva uma função para ordenar os
// valores da pilha em ordem crescente.

function ordenarPilha() {
  let minhaPilha = [5,3,9,10,15,4];
  const pilhaOrdenada = [];

  while (minhaPilha.length>0) { //tamanho da pilha
    const elemento = minhaPilha.pop(); 

    while (pilhaOrdenada.length>0 && elemento<pilhaOrdenada[pilhaOrdenada.length-1]) { // comparra o ultmo elemento é menor que o ultimo elemento do array pilha ordenada
      minhaPilha.push(pilhaOrdenada.pop());
    }

    pilhaOrdenada.push(elemento);
  }

  
  return pilhaOrdenada;
}


console.log(ordenarPilha());