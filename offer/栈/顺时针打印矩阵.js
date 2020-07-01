function printMatrix(matrix) {
  let res = [];
  while(matrix.length !==0){
    let firstLine = matrix.shift();
    for(let i=0;i<firstLine.length;i++){
      res.push(firstLine[i]);
    }

    if(matrix.length !==0 && matrix[0].length !==0){
      for(let row in matrix){
        res.push(matrix[row].pop());
      }
    }

    if(matrix.length !==0) {
      let lastLine = matrix.pop().reverse();
      for(let i=0;i<lastLine.length;i++){
        res.push(lastLine[i]);
      }
    }

    if(matrix.length !==0 && matrix[0].length !==0){
      for(let i= matrix.length-1;i>=0;i--){
        res.push(matrix[i].shift());
      }
    }
  }
  return res;
}
