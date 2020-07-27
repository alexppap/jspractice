var pathSum = function(root, sum) {
  let res = [];
  if(root === null){
      return res;
  }
  dfs(root,sum,0,[],res)
  return res;
};

function dfs (root,sum,curnum,path,res){
  curnum += root.val;
  path.push(root.val);
  if(sum === curnum && root.left === null && root.right === null){
    res.push(path.slice(0));
  }
  if(root.left !== null){
      dfs (root.left,sum,curnum,path,res);
  }
  if(root.right !== null){
      dfs (root.right,sum,curnum,path,res);
  }
  path.pop();
}