var generate = function(numRows) {
  let res = [];
  for(let i=0;i<numRows;i++){
      let row = [];
      row[0] = 1;
      row [i] = 1;
      if(i>1){
          for(let j=1;j<i;j++){
              row[j] = res[i - 1][j - 1] + res[i - 1][j];
          } 
      }
      res.push(row);
  }
  return res;
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let res = [], last = [];
  for(let i = 0; i < rowIndex + 1; i++){
      last = res;
      res = [];
      res[0] = 1;
      res[i] = 1;
      if(i > 1){
          for(let j = 1; j < i; j++){
              res[j] = last[j - 1] + last[j];
          }
      }
  }
  return res;
};
