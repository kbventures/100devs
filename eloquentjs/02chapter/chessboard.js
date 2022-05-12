

// 8x8
// function chessBoard(matrix){
//     let matrixString="";
//     let odd = true;
//     for(let i =0; i<= matrix; i++){
//         odd  ? matrixString += " # # # #\n" : matrixString += "# # # #\n";
//         odd = odd !==true; 
//     }

//     console.log(matrixString)
// }



// Matrix of any size

function chessBoard(matrix){
    let matrixString="";
    let odd = true;
    for(let i =0; i<= matrix; i++){
        for(let j=0; j<= matrix; j++){
            odd  ? matrixString += " " : matrixString += "#";
            odd = odd !==true; 
            if(j == matrix){
                matrixString += "\n"
            }
        }
    }
    console.log(matrixString)
}




chessBoard(20)