//中序

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

//前序

var preorderTraversal = function(root) {
  if(root!==null){
      return [root.val,...preorderTraversal(root.left),...preorderTraversal(root.right)];
  } else{
      return [];
  }
};

var preorderTraversal = function(root) {
  let res = [];
  if(root===null){
   return [];
  }
  let nodestack = [];
  nodestack.push(root);
while(nodestack.length>0){
    let node = nodestack.pop();
    res.push(node.val);
    if(node.right) nodestack.push(node.right);
    if(node.left) nodestack.push(node.left);
}
return res;
};

//后序

var postorderTraversal = function(root) {
  if(root!==null){
      return [...postorderTraversal(root.left),...postorderTraversal(root.right),root.val];
  } else{
      return [];
  }
};

var postorderTraversal = function(root) {
  let nodestack = [];
  let res = [];
  if(root===null){
      return [];
  }
  nodestack.push(root);
  while(nodestack.length>0){
      let node = nodestack.pop();
      res.unshift(node.val);
      if(node.left){
          nodestack.push(node.left);
      }
      if(node.right){
          nodestack.push(node.right);
      }
  }
  return res;
};