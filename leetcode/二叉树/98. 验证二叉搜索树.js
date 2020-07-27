//递归解法
//所有左子树小于一个根子结点值，同理右子树也是如此。
var isValidBST = function (root) {
  return judgeTree(root, -Infinity, Infinity);
};

function judgeTree(node, lower, upper) {
  if (node === null) return true;
  if (node.val <= lower || node.val >= upper) return false;
  return (
    judgeTree(node.left, lower, node.val) &&
    judgeTree(node.right, node.val, upper)
  );
}

//中序遍历是否为递增

var isValidBST = function (root) {
  let res = inorderTraversal(root);
  for (let i = 0; i < res.length; i++) {
    if (res[i] >= res[i + 1]) {
      return false;
    }
  }
  return true;
};

var inorderTraversal = function (root) {
  if (root) {
    return [
      ...inorderTraversal(root.left),
      root.val,
      ...inorderTraversal(root.right),
    ];
  } else {
    return [];
  }
};
