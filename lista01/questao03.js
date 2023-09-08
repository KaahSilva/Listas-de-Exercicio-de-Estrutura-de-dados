// 3) Faça uma função em JavaScript que recebe um array e retorne como resultado a
// posição do maior valor encontrado. Caso haja mais de uma ocorrência do maior valor,
// mostre a posição da primeira ocorrência.
//---------------------
// ANOTAÇÕES:
// posição do maior valor encontrado : usar o index.of

//--------------------

function maiorValor(){
    let valores = [10,100,23,33,4,5,100];
    let maior=valores[0];
    for( i=0; i< valores.length ;i++){
        if (valores[i] > maior){
          maior=valores[i];
        }
    }

    let posicao = valores.indexOf(maior);
    return {maior , posicao};
}

let resultado= maiorValor()
console.log(`O maior número é ${resultado.maior} e a sua posição é ${resultado.posicao}`);
