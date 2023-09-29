
// 4. Escreva um algoritmo, usando uma Pilha, que inverte as letras de cada palavra
// de um texto terminado por ponto (.) preservando a ordem das palavras. Por
// exemplo, dado o texto: ESTE EXERCÍCIO E MUITO FÁCIL. A saída deve ser:
// ETSE OICÍCREXE É OTIUM LICÁF


function inverterPalavras() {
    let frase = 'ESSE EXERCICIO É MUITO FACIL .';
    
    // Convertendo a string em um array de palavras
    let palavras = frase.split(' ');
    console.log(palavras)
    palavras.pop()
    console.log(palavras)
    // Invertendo a ordem dos caracteres de cada palavra
    for (let i = 0; i < palavras.length; i++) { //pega cada palavra e separa
        let caracteres = palavras[i].split('');// tem todas as letras separadas, porem em [] diferentes
        
        let novaPalavra = '';// é para receber a palavra invertida
        //console.log(caracteres)

        for (let j = caracteres.length - 1; j >= 0; j--) {
            novaPalavra += caracteres[j];
        
        }

     palavras[i] = novaPalavra; //recebe todas as palavras so que juntas
    
    }
    console.log(palavras)
    // Juntando as palavras novamente
    let novaFrase = palavras.join(' ');
   

    return novaFrase;
}
console.log(inverterPalavras());


//obs: não to conseguindo remover o ponto sem dar espaço pq ele fica dentro de um array e se eu coloca pra remover no for (caracteres.pop)ele reemove sempre a ultima letra de cada array :(