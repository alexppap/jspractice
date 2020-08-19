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

// let arr2 = [1,[2,3,4],[5,[6]]]
// function flat(arr){
//   let res = [];
//   for(let i=0;i<arr.length;i++){
//     if(!Array.isArray(arr[i])){
//       res.push(arr[i]);
//     }else{
//       res = res.concat(flat(arr[i]));
//     }
//   }
//   return res;
// }
// console.log( flat(arr2))