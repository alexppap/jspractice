var buildTree = function(preorder, inorder) {
  if(preorder.length === 0){
      return null;
  }
  let rootValue = preorder[0];
  let root = new TreeNode(rootValue);
  let rootIndex = inorder.indexOf(rootValue);
  let inLeft = inorder.slice(0,rootIndex);
  let inRight = inorder.slice(rootIndex+1,inorder.length);
  preorder.shift();
  let preLeft = preorder.slice(0,inLeft.length);
  let preRight = preorder.slice(inLeft.length,preorder.length);
  root.left = buildTree(preLeft,inLeft);
  root.right = buildTree(preRight,inRight);
  return root;
};