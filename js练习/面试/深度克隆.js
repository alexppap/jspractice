JSON.parse(JSON.stringify(obj))

function deepClone(obj) {
  var newObj =obj instanceof Array ? [] : {};
  for (var item in obj) {
    var temple = typeof obj[item] =='object' ? deepClone(obj[item]) : obj[item];
    newObj[item] = temple
  }
  return newObj;
}

