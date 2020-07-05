function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function reConstructBinaryTree(pre, vin) {
  if(pre.length === 0){
    return null;
  }
  if(pre.length === 1){
    return new TreeNode(pre[0]);
  }
  var rootval = pre[0];
  var root = new TreeNode(rootval);
  var rootIndex = vin.indexOf(rootval);
  var treeLeft = vin.slice(0,rootIndex);
  var treeRight = vin.slice(rootIndex+1,vin.length);
  pre.shift();
  var preLeft = pre.slice(0,treeLeft.length);
  var preRight = pre.slice(treeLeft.length,pre.length);

  root.left = reConstructBinaryTree(preLeft, treeLeft);
  root.right = reConstructBinaryTree(preRight, treeRight);

  return root;
}
