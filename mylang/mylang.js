function extend(Child,Parent) {
  var F = function(){};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
}

function deepClone(obj) {
  var newObj =obj instanceof Array ? [] : {};
  for (var item in obj) {
    var temple = typeof obj[item] =='object' ? deepClone(obj[item]) : obj[item];
    newObj[item] = temple
  }
  return newObj;
}

function multi() {
  var n = {};
  var stuff;
  var len = arguments.length;
  for(var j=0;j<len;j++){
    stuff = arguments[j];
    for(var i in stuff){
      n[i] = stuff[i];
    }
  }
  return n;
}