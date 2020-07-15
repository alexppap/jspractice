function FindPath(root, expectNumber){
  let res = [];
  if(!root){
    return res;
  }
  return dfsFind(root, expectNumber,0,[],res)
}

function dfsFind(root, expectNumber,currNumber,path,res) {
  currNumber += root.val;
  path.push(root.val);
  if(currNumber === expectNumber && root.left === null && root.right === null){
    res.push(path.slice(0))
  }
  if(root.left !== null){
    dfsFind(root.left, expectNumber,currNumber,path,res)
  }
  if(root.right !== null){
    dfsFind(root.right, expectNumber,currNumber,path,res)
  }
  path.pop()
}