/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  function buildTree(start, end){
      let ans = [];
       if (start > end) return [null]
      for(let i=start;i<=end;i++){
          let leftArr =  buildTree(start, i-1);
          let rightArr =  buildTree(i+1, end);
          for(let leftNode of leftArr){
              for(let rightNode of rightArr){
                  let node = new TreeNode(i);
                  node.left = leftNode;
                  node.right = rightNode;
                  ans.push(node);
              }
          }
      }
      return ans;
  }
  if(n===0){
      return [];
  }
  return buildTree(1, n);
};