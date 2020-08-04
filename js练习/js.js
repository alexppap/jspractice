function reletive_7( digit ) {
  let len = digit.length;
  let res = [];
  let path = '';
  let num = 0;
  let used = [];
  if(len === 0) {
    return 0;
  }
  dfs(digit,len,0,path,used,res);
  for(let i=0;i<res.length;i++){
    if(res[i] % 7 == 0){
      num++;
    }
  }
  return num;
}
function dfs (digit,len,depth,path,used,res){
  if(depth == len){
      res.push(path.slice(0));
      }
  for(let i=0;i<len;i++){
     if(used[i]){
         continue;
     }
     path += digit[i];
     used[i] = true;
     dfs(digit,len,depth+1,path,used,res);
     path = path.substring(0,path.length-1); 
     used[i] = false;
  }
}
console.log(reletive_7([1,1,2]))

var data =[[1,2],[1,1],[1,3]];
function sortData(data){
  data.sort((a,b)=>{
      return a[0]/a[1] -b[0]/b[1]
  })
  return data;
}

console.log(sortData(data))