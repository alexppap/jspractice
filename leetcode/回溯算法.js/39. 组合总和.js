

var combinationSum = function(candidates, target) {
  let res = [];
  let len = candidates.length;
  if(len === 0){
      return [];
  }
  dfs(candidates,len,target,0,[],res);
  return res;
};

function dfs(candidates,len,target,start,path,res){
  if(target < 0){
      return;
  }
  if(target === 0){
      res.push(path.slice(0));
  }
  //设置start来避免重复
  for(let i=start;i<len;i++){
      path.push(candidates[i]);
      dfs(candidates,len,target-candidates[i],i,path,res);
      path.pop();
  }
}