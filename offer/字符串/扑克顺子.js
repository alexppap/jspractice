function IsContinuous(numbers){
  let arr = [-5];
  for(let i=0;i<13;i++){
    arr.push(0);
  }
  let len = numbers.length;
  let min = 14;
  let max = -1;
  if(len !== 5){
    return false;
  }
  for(let j=0;j<len;j++){
    arr[numbers[j]]++;

    if(numbers[j] === 0){
      continue;
    }

    if(arr[numbers[j]]>1){
      return false;
    }

    if(numbers[j] < min){
      min = numbers[j];
    }

    if(numbers[j] > max){
      max = numbers[j]
    }
  }

  return max - min < 5;
}