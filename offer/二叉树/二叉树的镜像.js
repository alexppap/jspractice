function Mirror(root) {
  if(root == null){
    return null;
  }
  var temp = root.left;
  root.left = root.right;
  root.right = temp;
  Mirror(root.left);
  Mirror(root.right);

}
