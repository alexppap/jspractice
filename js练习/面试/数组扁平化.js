let arr = [1,[2,3,[4,5]]]
function flattern(arr){
  let res = [];
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      res = res.concat(flattern(arr[i]));
    } else{
      res.push(arr[i]);
    }
  }
  return res;
}
