//add(1)(2)(3) 6
// function myadd(x){
//   return function(y){
//     return function(z){
//       return x+y+z;
//     }
//   }
// }

// console.log(myadd(1)(2)(3))

//柯里化函数
// function curry(fn,...args){
//   return fn.length <= args.length ? fn(...args) : curry.bind(null,fn,...args);
// }
// let addCurry2 = curry(function(a,b){return a+b},3);
// console.log(addCurry2(10))




// function progressCurrying(fn, args) {
//   var _this = this;
//   var len = fn.length;
//   var args = args || [];

//   return function () {
//     var _args = Array.prototype.slice.call(arguments);
//     Array.prototype.push.apply(args, _args);

//     // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
//     if (_args.length < len) {
//       return progressCurrying.call(_this, fn, _args);
//     }

//     // 参数收集完毕，则执行fn
//     return fn.apply(this, _args);
//   };
// }
function add(a, b, c) {
  return a + b+ c;
}
// var addCurry = progressCurrying(add);
// console.log(addCurry(1)(2)(3));

function curry3(fn){
  var c = (...arg) => (fn.length === arg.length) ? fn(...arg) : (...arg1) => c(...arg,...arg1);
  return c;
}

var addCurry3 = curry3(add);
console.log(addCurry3(1,2)(4));
