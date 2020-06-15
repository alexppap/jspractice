//所有数据都在0-100里面

function bucketSort(arr){
  let hashArr = [];
  let newArr = [];
  for(let i=0;i<101;i++){
    hashArr.push(0);
  }
  for(let a=0;a<arr.length;a++){
    hashArr[arr[a]]++;
  }
  for(let j=0;j<hashArr.length;j++){
    if(hashArr[j]===0){
      continue;
    } else{
      for(let k=0;k<hashArr[j];k++){
        newArr.push(j)
      }
    }
  }
  return newArr;
}

console.log(bucketSort([1,4,3,3,3,5,99,100,99]))