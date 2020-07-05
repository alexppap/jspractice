
var inorderTraversal = function(root) {
  if(root){
     return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
} else{
    return [];
}
};

var inorderTraversal = function(root) {
  let nodestack = [];
  let res = [];
  if(root===null){
     return [];
  }
  while(root!==null||nodestack.length>0){
      while(root!==null){
          nodestack.push(root);
          root = root.left;
      }
      root = nodestack.pop();
      res.push(root.val);
      root=root.right;
  }
  return res;
}