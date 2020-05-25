Function.prototype.bind=function(obj,arg){
  var arg=Array.prototype.slice.call(arguments,1);
  var that=this;
  var bound=function(newArg){
  arg=arg.concat(Array.prototype.slice.call(newArg));
  return that.apply(obj,arg);
  }
  var F = function(){}
  F.prototype=that.prototype;
  bound.prototype=new F();
  return bound;
}


//手写call
Function.prototype.myCall = function(context){
    if(typeof this !== 'function'){
        console.error('type error')
    };
    //获取参数
    let args = [...arguments].slice(1),
        result = null;
    //判断context是否传入 若没传入则设为window
    context = context || window;
    //将调用函数设为对象的方法
    context.fn = this;
    result = context.fn(...args);
    delete context.fn;
    return result;
}


//手写apply
Function.prototype.myApply = function(context){
    if(typeof this !== 'function') {
        console.error('type error');
    }
    let result = null;
    context = context || window;
    context.fn = this;
    if(arguments[1]){
        result = context.fn(...arguments[1]);
    } else {
        result = context.fn()
    }
    delete context.fn;
    return result;
}