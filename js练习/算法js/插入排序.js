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
}//插入排序

var quickSort = function(arr) {

  　　if (arr.length <= 1) { return arr; }
  
  　　var pivotIndex = Math.floor(arr.length / 2);
  
  　　var pivot = arr.splice(pivotIndex, 1)[0];
  
  　　var left = [];
  
  　　var right = [];
  
  　　for (var i = 0; i < arr.length; i++){
  
  　　　　if (arr[i] < pivot) {
  
  　　　　　　left.push(arr[i]);
  
  　　　　} else {
  
  　　　　　　right.push(arr[i]);
  
  　　　　}
  
  　　}
  
  　　return quickSort(left).concat([pivot], quickSort(right));
  
  };//快排 sort的原理