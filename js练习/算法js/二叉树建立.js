
//创建节点
function Node(data,left,right){
  this.data = data;
  this.left = left;
  this.right = right;
}

Node.prototype.show = function(){
  return this.data;
}

//创建二叉树
function BST(){
  this.root = null;
}

BST.prototype.insert = function(data){
  var node = new Node(data,null,null)
  if(this.root == null){
    this.root = node;
  } else{
    var current = this.root;
    var parent;
    while(true){
      parent = current;
      if(data < current.data){
        current = current.left;
        if(current == null){
          parent.left = node;
          break;
      }
      } else{
        current = current.right;
        if(current == null){
          parent.right = node;
          break;
        }
      }
    }
  }
}
//前序遍历
BST.prototype.preOrder = function(node){
  if(node){
      console.log(node.show() + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
  }
}

//中序遍历
BST.prototype.inOrder = function(node){
  if(node){
      this.inOrder(node.left);
      console.log(node.show() + " ");
      this.inOrder(node.right);
  }
}
//后序遍历
BST.prototype.postOrder = function(node){
  if(node){
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show() + " ");
}
}
//测试数据
var bst  = new BST();
var nums = [10,3,18,2,4,13,21,9,8,9];
for(var i = 0;i < nums.length;i ++){
    bst.insert(nums[i]);
}
bst.preOrder(bst.root);
console.log('****************')
