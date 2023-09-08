//5) Declare uma matriz 5 x 5. Preencha com 1 a diagonal principal e com 0 os demais
// elementos. Escreva ao final a matriz obtida.


let mat=[];
mat[0]=["X","X","X","X","X"];
mat[1]=["X","X","X","X","X"];
mat[2]=["X","X","X","X","X"];
mat[3]=["X","X","X","X","X"];
mat[4]=["X","X","X","X","X"];

console.table(mat)

for(l=0 ; l<mat.length;l++){
    for(c=0; c<mat.length; c++){
        // console.table(mat[l][c]);
        if(l===c){
            mat[l][c]=1
        }else{
            mat[l][c]=0
        }
    }
}


console.table(mat);
