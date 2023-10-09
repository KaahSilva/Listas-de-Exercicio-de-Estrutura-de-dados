// Considere uma pilha que armazene caracteres. Escreva uma função que verifique
// se uma palavra é uma palíndromo.


function palindromo(){
    let palavra='esse';
    let pilha=palavra.split('');

    let invertida = '';
    
    while(pilha.length>0){
        invertida+=pilha.pop();
    }

    if(invertida===palavra){
        console.log("É um Palíndromo");
   }else{
        console.log("Não ´r um Palíndromo");
   }
}
palindromo()










// function frasePolindromo(){
//    let palavra ='ESSE';
//    console.log(palavra)
//    let separar = palavra.split(' ');
//    console.log(separar)

//    for (let i = 0; i < separar.length; i++) { //pega cada palavra e separa
//     let letras = separar[i].split('');// tem todas as letras separadas, porem em [] 
//     console.log(letras)
//     let novaPalavra = '';// é para receber a palavra invertida


//     for (let j = letras.length - 1; j >= 0; j--) {
//         novaPalavra += letras[j];
//     }

//     console.log(novaPalavra)

//     if(novaPalavra === palavra){
//         console.log("É um Palíndromo");
//     }else{
//         console.log ("Não ´r um Palíndromo")
//     }

//    }

 
// }
// frasePolindromo()