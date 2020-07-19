//闭包保证不污染全局变量

var convertBST = function(root) {
  let temp = 0;
  function convertBST2(root){
      if(root!=null) {
      convertBST2(root.right);
      temp += root.val;
      root.val = temp;
      convertBST2(root.left);
  }
  }
  convertBST2(root)
  return root;   
};