function reOrderArray(array) {
  let leftArr = [];
  let rightArr = [];
  let len = array.length;
  for(let i=0;i<len;i++){
    if(array[i] % 2 === 1){
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }
  return leftArr.concat(rightArr)
}