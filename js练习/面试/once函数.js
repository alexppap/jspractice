//实现一个once函数，传入函数参数只执行一次 
function once(func) {
  var tag = true;
  return function() {
    if (tag == true) {
      func.apply(null, arguments);
      tag=false;
    }
    return undefined;
  }
  
}