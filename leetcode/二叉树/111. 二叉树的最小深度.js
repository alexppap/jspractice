// 存在特殊情况，左或右子树缺失

var minDepth = function(root) {
  if(root == null){
      return 0;
  }
  var left = minDepth(root.left);
  var right = minDepth(root.right);
  if(root.left == null || root.right == null){
      return 1+left+right;
  }

  return 1+Math.min(left,right)
 
};