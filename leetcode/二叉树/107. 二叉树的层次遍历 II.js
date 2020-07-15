/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  var nodestack = [];
  var res = [];
  let tmp = [];
  if(!root){
      return [];
  }
  nodestack.push(root);
  while(nodestack.length>0){
      let len = nodestack.length;
      tmp = [];
      for(let i=0;i<len;i++){
      var node = nodestack.shift();
      if(node.left) nodestack.push(node.left);
      if (node.right) nodestack.push(node.right);
      tmp.push(node.val);
      }
      res.unshift(tmp);
  }
  return res;
};

//递归
var levelOrderBottom = function(root) {
  let res=[];
  const deepf=(node,level)=>{
    if(!node){
      return
    }
    res[level]?res[level].push(node.val):res[level]=[node.val];
    level++;
    deepf(node.left,level);
    deepf(node.right,level);
  }
  deepf(root,0)
  return res.reverse();
};