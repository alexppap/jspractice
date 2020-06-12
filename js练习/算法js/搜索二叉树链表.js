/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

//输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。

//中序遍历
function Convert(pRootOfTree)
{
    // write code here
    var p = pRootOfTree;
    var stack = [];
    var pre;
    var root;
    var flag = true;
    while(p!=null || stack.length>0){
        while(p){
            stack.push(p);
            p = p.left;
        }
        p = stack.pop();
        if(flag){
            root = p;
            pre = root;
            flag = false;
        } else {
            pre.right = p;
            p.left = pre;
            pre = p;
        }
        p = p.right;
    }
    return root;
}