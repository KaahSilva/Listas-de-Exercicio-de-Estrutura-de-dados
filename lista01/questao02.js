//  02 ) Faça uma função em JavaScript que recebe um array A e um valor X e retorne como
// resultado a quantidade de vezes que X aparece em A.
let valoresIguais=[];
function verificador (A,X) {
 
   for (i=0; i< A.length;i++){
      if(X === A[i]){
         valoresIguais.push(A[i])
      }
   }

   if (valoresIguais.length === 0) {
      console.log(`Não existem valores iguais a ${X}.`);
   } else {
      console.log(`A quantidade de vezes que aparece o valor ${X} é ${valoresIguais.length}`);
  }
}

let arrayA = [10 , 11, 22, 32,22,30,11,22,90]; 
let valorX = 22;

verificador(arrayA, valorX);


