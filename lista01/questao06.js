//¨) Gerar e imprimir uma matriz de tamanho 10 x 10, onde seus elementos são da forma:
// A[i][j] = 2i + 7j − 2 se i < j;
// A[i][j] = 3i 2 − 1 se i = j;
// A[i][j] = 4i 3 − 5j 2 + 1 se i > j
//------------------
///ANOTAÇOES
//c mat[l] = []cria uma nova matriz vazia para a matriz mat
//------------------
let mat=[]
for (l=0;l<10;l++){
    mat[l] = []; 
    for(c=0;c<10;c++){
        if(l<c){
            mat[l][c]= 2*l + 7*c - 2;
        }else if(l===c){
            mat[l][c]= 3*l**2 - 1;
        }else{
            mat[l][c] = 4*l**3 - 5*c**2 + 1;
        }
    }
}

console.table(mat);


