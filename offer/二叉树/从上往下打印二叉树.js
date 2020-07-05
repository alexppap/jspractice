/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
  var queue = [];
  var data = [];

  if(root !== null){
    queue.push(root);
  }
  while(queue.length !== 0){
    var node = queue.shift();
    data.push(node.val);

    if(node.left !== null){
      queue.push(node.left);
    }

    if(node.right !== null){
      queue.push(node.right);
    }
  }
  return data;
}