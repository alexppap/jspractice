function insert(array) {
  for (var i = 1; i < array.length; i++) {
    var key = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
} //插入排序

var quickSort = function (arr) {
  

  var pivotIndex = Math.floor(arr.length / 2);

  var pivot = arr.splice(pivotIndex, 1)[0];

  var left = [];

  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}; //快排 sort的原理

var arr2 = [1,3,4,5,2,8]

// console.log(quickSort(arr))

var quickSort2 = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivotIndex = Math.floor(arr.length / 2);

  var pivot = arr.splice(pivotIndex, 1)[0];

  var left = [];

  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // return quickSort(left).concat([pivot], quickSort(right));
  return [...quickSort2(left), pivot, ...quickSort2(right)]
}

console.log(quickSort2(arr2))


// function insert1(arr){
//   for(var i=1;i<arr.length;i++){
//     var key = arr[i];
//     var j = i-1;
//     while(j>=0 && arr[j] > key){
//       arr[j+1] = arr[j];
//       j--;
//     }
//     arr[j+1] = key;
//   }
//   return arr;
// }

// var arr1 = [1,2,6,4,7,5];
// console.log(insert1(arr1));

// function quick(arr){
//   if(arr.length<=1){
//     return arr;
//   }
//     var pivotindex = Math.floor(arr.length / 2);
//     var pivot = arr.splice(pivotindex,1)[0];
//     var left = [];
//     var right = [];
//     for(var i=0;i<arr.length;i++){
//       if(arr[i]<pivot){
//         left.push(arr[i]);
//       } else{
//         right.push(arr[i]);
//       }
//     }
//     return [...quick(left),pivot,...quick(right)]; 
// }
// var arr1 = [1,2,6,4,7,5];
// console.log(quick(arr1))