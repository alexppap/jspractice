JSON.parse(JSON.stringify(obj))

function deepClone(obj) {
  var newObj =obj instanceof Array ? [] : {};
  for (var item in obj) {
    var temple = typeof obj[item] =='object' ? deepClone(obj[item]) : obj[item];
    newObj[item] = temple
  }
  return newObj;
}






// function deepClone(obj){
//   let obj = Array.isArray(obj) ? [] : {};
//   for(let item in obj){
//     let temp = typeof obj[item] =='object' ? deepClone(obj) : obj[item];
//     newObj[item] = temp;
//   }
//   return newObj;
// }