var sortedArrayToBST = function(nums) {
  return helper(nums,0,nums.length-1);
};

function helper(nums,left,right){
  if(left > right){
      return null;
  }
  var mid = (left + right) >> 1;
  var node = new TreeNode(nums[mid]);
  node.left = helper(nums,left,mid-1);
  node.right = helper(nums,mid+1,right);
  return node;
}