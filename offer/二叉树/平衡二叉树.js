function IsBalanced_Solution(pRoot) {
  if(!pRoot){
    return true;
  }
  // return Math.abs(height(pRoot.left) - height(pRoot.right)) <=1;
  if(Math.abs(height(pRoot.left) - height(pRoot.right)) >1){
    return false;
}
  return isBalanced(pRoot.left) && isBalanced(pRoot.right);
}

function height (node){
  if(!node){
    return 0;
  }
  var left = height(node.left);
  var right = height(node.right);
  return Math.max(left,right)+1;
}


var generate = function(numRows) {
  let res = [];
  for(let i = 0; i < numRows; i++){
      let row = [];
      row[0] = 1;
      row[i] = 1;
      if(i > 1){
          for(let j = 1; j < i; j++){
              row[j] = res[i - 1][j - 1] + res[i - 1][j];
          }
      }
      res.push(row);
  }
  return res;
};

