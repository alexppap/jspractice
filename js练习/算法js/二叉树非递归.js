var preorderTraversal = function(root) {
  let nodestack = [];
  let res = [];
  nodestack.push(root);
  if(root===null){
      return [];
  }
  while(nodestack.length>0){
      let node = nodestack.pop();
      res.push(node.val);
      if(node.right){
          nodestack.push(node.right);
      }
      if(node.left){
          nodestack.push(node.left);
      }
  }
  return res;
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