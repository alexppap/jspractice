
function calways(n){
  let arr = [1,2,4];
  for(let i=3;i<n;i++){
      arr[i] = arr[i-1]+arr[i-2]+arr[i-3];
  }
  return arr[n-1];
}

console.log(calways(5))

function getmap(){
  let map = new Map();
  map.set('a',1);
  return map['a'];
}

console.log(getmap())