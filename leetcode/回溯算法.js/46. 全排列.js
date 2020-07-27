const permute = function(nums) {
  let len = nums.length;
  let res = [];
  let path = [];
  let used = [];
  if(len === 0){
      return [];
  }
  dfs(nums,len,0,path,used,res);
  return res;
};
function dfs (nums,len,depth,path,used,res){
  if(depth == len){
      res.push(path.slice(0));
      }
  for(let i=0;i<len;i++){
     if(used[i]){
         continue;
     }
     path.push(nums[i]);
     used[i] = true;
     dfs(nums,len,depth+1,path,used,res);
     path.pop(); //回溯
     used[i] = false; //回溯
  }
}