var diameterOfBinaryTree = function(root) {
  if(root == null){
      return 0;
  }
  var tempH = getDepth(root.left) + getDepth(root.right)
  return Math.max(tempH,diameterOfBinaryTree(root.left),diameterOfBinaryTree(root.right))
};

function getDepth(root){
  if(root == null) {
      return 0;
  }
  var left = getDepth(root.left);
  var right = getDepth(root.right);

  return 1+Math.max(left,right)
}




//闭包
var diameterOfBinaryTree = function(root) {
  // 默认为1是因为默认了根节点自身的路径长度
  let ans = 0;
  function depth(root) {
      if (!root) {
          
          return 0;
      }
      
      let L = depth(root.left);
      let R = depth(root.right);

      // 获取该树的最长路径和现有最长路径中最大的那个
      ans = Math.max(ans, L + R);
      /* 关键点2
      已知根节点的左右子树的深度，
      则，左右子树深度的最大值 + 1，
      便是以根节点为数的最大深度*/
      return Math.max(L, R) + 1;
  }
  depth(root);

  // 由于depth函数中已经默认加上数节点的自身根节点路径了，故此处需减1
  return ans;
}; 
