//map实现
function map(arr,mapCallback){
  if(!Array.isArray(arr) || !arr.length || typeof mapCallback !=='function'){
    return [];
  }
  let res = [];
  for(let i=0;i<arr.length;i++){
    res.push(mapCallback(arr[i],i,arr));
  }
  return res;
}
let arr = [1,2,3];
console.log(map(arr,function(item){return item * 2}))



//filter实现
function filter(arr,filterCallback){
  if(!Array.isArray(arr) || !arr.length || typeof filterCallback !=='function'){
    return [];
  }
  let res = [];
  for(let i=0;i<arr.length;i++){
    if(filterCallback(arr[i],i,arr)){
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(filter(arr,function(item){return item > 2}))

//reduce实现
function reduce(arr,reduceCallback,initalValue){
  if(!Array.isArray(arr) || !arr.length || typeof reduceCallback !=='function'){
    return [];
  }
  let flag = initalValue!==undefined;
  let value =  flag ? initalValue : arr[0];
  for(let i= 0;i<arr.length;i++){
   value = reduceCallback(value,arr[i],i,arr);
  }
  return value;
}

console.log(reduce([1,2,3],function(a,b){return a+b},0))