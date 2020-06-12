// 输入一颗二叉树的根节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。


/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
    // write code here
    var res = [];
    if(root === null){
        return res;
    }
    dfsFind(root,expectNumber,0,[],res)
    return res;
}

function dfsFind(root,expectNumber,currNumber,path,res){
    currNumber+=root.val;
    path.push(root.val);
    if(currNumber === expectNumber && root.left===null && root.right===null){
        res.push(path.slice(0));
    }
    if(root.left!==null){
        dfsFind(root.left,expectNumber,currNumber,path,res)
    }
    if(root.right!==null){
        dfsFind(root.right,expectNumber,currNumber,path,res)
    }
    path.pop()
}