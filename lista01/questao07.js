// 7 )Faça um programa para gerar automaticamente números entre 0 e 99 de uma cartela de
// bingo. Sabendo que cada cartela devera conter 5 linhas de 5 números, gere estes dados
// de modo a não ter números repetidos dentro das cartelas. O programa deve exibir na
// tela a cartela gerada.
//----------------------------
// ANOTAÇÕES

//evitar que a mesma linha tenha números repetidos. 

//----------------------------




let cartela = [];

for (l=0; l<5; l++) {
  cartela[l] = [];
  for (c=0; c<5; c++) {
   
    let numero=Math.floor(Math.random()*100);

    while (cartela[l].includes(numero)) {
      numero=Math.floor(Math.random()*100);
    }
    cartela[l][c]=numero;
  }
}

console.table(cartela)

//--------------------------------------------




//-------------------------





