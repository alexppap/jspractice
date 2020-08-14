// var line = readline();
// var arr = line.split(',');
// var target = arr.pop();
// print(findSum (arr,target))

// function findSum (arr,target) {
//   var sum = 0;
//   for(var i=0;i<arr.length;i++){
//     for(var j=i+1;j<arr.length;j++){
//       if(parseInt(arr[i])+parseInt(arr[j]) == parseInt(target)){
//         sum = sum + i + j;
//       }
//     }
//   }
//   return sum;
// }

var arr = [1,1,2,2,4,5,5];
function findOne(arr){
  let res = 0;
  for(let i=0;i<arr.length;i++){
    res = res ^ arr[i];
  }
  return res;
}
console.log(findOne(arr))

var arr1 = ['1','-2i'];
var arr2 = ['3','4i'];

function calnum(arr1,arr2){
  var num0 = parseInt(arr1[0]);
  var num1 = parseInt(arr1[1]);
  var num2 = parseInt(arr2[0]);
  var num3 = parseInt(arr2[1]);
  var firstnum = num0 * num2 - num1 * num3;
  var lastnum = num0 * num3 + num1 * num2;
  return firstnum + '+' + lastnum + 'i';
}
console.log(calnum(arr1,arr2));
