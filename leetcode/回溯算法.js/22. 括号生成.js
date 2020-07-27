/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if(n==0){
      return [];
  }
  let res = [];
  dfs(n,n,n,"",res);
  return res;
};

function dfs (n,left,right,path,res){
  if(left == 0 && right == 0){
      res.push(path);
      return;
  }
  if(left > 0){
      dfs(n,left-1,right,path + "(",res);
  }
  if(left < right){
      dfs(n,left,right-1,path + ")",res);
  }
}