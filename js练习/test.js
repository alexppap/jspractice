var target = {a:1};
var source1 = {b:2};
var source2 = {c:7};

console.log(Object.assign(target,source1,source2))
console.log(Math.max(...[1,2,3]))
console.log([1,2,3].map((i)=>i*i))

console.log([...new Set([1,2,2,3,4])])
console.log([1,2,9,4,5].sort((a,b)=>a-b))

var arr = [1,2,3,4,4,6,7,6];
function remove(arr){
  let res = [];
  for(let i=0;i<arr.length;i++){
    if(res.indexOf(arr[i])===-1){
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(remove(arr))