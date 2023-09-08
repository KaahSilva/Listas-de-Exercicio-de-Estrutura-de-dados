// 4. Faça uma função em JavaScript que recebe um array e que substitui por -1 se um
// elemento é ímpar e por +1 se ele é par.
//-----------------
// ANOTAÇÕES: 
// eu quero que mostre o array inicial e depois o array trocado
//-----------------
function imparOuPar(){
    let numeros = [1,2,3,4,5,6,7];
    let par= '-1';
    let impar= '+1';
    let troca=[];
    console.log(`esses são os numeros : ${numeros}`)
    for(i=0; i< numeros.length;i++){
        if(numeros[i]%2 === 0){
            numeros[i]= par;
            troca.push(numeros[i]);
        }else{
            numeros[i]= impar;
            troca.push(numeros[i]);
        }
    }

    console.log(`agora os numeros são : ${troca}`)
}

imparOuPar()