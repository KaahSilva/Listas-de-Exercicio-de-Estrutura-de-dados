// 01 ) Faça uma função em JavaScript que recebe um array de números inteiros e informe
// quantos destes são negativos.

let numeros = [1,-1,5,-2,3,4,7];
let numNegativos =[];
for (i=0 ; i< numeros.length; i++){
    if (numeros[i] >= 0){
        console.log(numeros[i] + " esse numeros são positivos");
    }else{
        console.log(numeros[i] + " esse numeros são negativos");
        numNegativos.push(numeros[i]);
    }
}


console.log(" a quantidade de numeros negativos é : " + numNegativos.length);