var arr = [1,2,2,3,3,4]
function newarr (arr) {
  var res = [];
  for (var i in arr) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i])
    }
  }
  return res;
}
// console.log(newarr(arr))
console.log(Array.from(new Set(arr)))

