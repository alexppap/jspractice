function reOrderArray(array)
{
   let leftArr = [];
   let rightArr = [];
   for(let i=0;i<array.length;i++){
     if(array[i]%2==1){
      leftArr.push(array[i])
     } else{
      rightArr.push(array[i])
     }
   }
   return leftArr.concat(rightArr)
   
}

//手写bind
Function.prototype.bind = function(obj,args){
  var args = Array.prototype.slice.call(arguments,1);
  var that = this;
  var bound = function(newargs){
    args = args.concat(Array.prototype.slice.call(newargs))
    return that.apply(obj,args)
  }
  var F=function(){}
  F.prototype=that.prototype;
  bound.prototype = new F();
  return bound;
} 

