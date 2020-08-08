function myNew(){
  var constructor  = Array.prototype.shift.call(arguments);
  var obj = {};
  obj.__proto__ = constructor.prototype;
  var res = constructor.apply(obj,arguments);
  return res instanceof Object ? res : obj;
}
