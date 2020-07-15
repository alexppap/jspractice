function IsBalanced_Solution(pRoot) {
  if(!pRoot){
    return true;
  }
  return Math.abs(height(pRoot.left) - height(pRoot.right)) <=1;
}

function height (node){
  if(!node){
    return 0;
  }
  var left = height(node.left);
  var right = height(node.right);
  return Math.max(left,right)+1;
}
