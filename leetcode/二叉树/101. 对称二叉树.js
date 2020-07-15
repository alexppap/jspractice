/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return sort(root,root)
};

function sort (root1,root2){
  if(root1 === null && root2 === null){
      return true
  }
  if(root1 === null || root2=== null){
      return false;
  }
  if(root1.val !== root2.val){
      return false;
  }
  return sort (root1.left,root2.right) && sort (root1.right,root2.left);
}