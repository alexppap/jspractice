//add(1)(2)(3) 6
function add(...a) {
  let res = 0;
  a.forEach(item => res += item);
  let fn = function (...b) {
  b.forEach(item => res += item);
  return fn
  }
  fn.toString = function () {
  return res
  }
  return fn
  }