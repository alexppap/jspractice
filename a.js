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