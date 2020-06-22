//类似冒泡排序，不过是根据字符串大小排序。

function PrintMinNumber(numbers){
  for(let i=0;i<numbers.length;i++){
    for(let j=i+1;j<numbers.length;j++){
      let str1 = numbers[i].toString() + numbers[j].toString();
      let str2 = numbers[j].toString() + numbers[i].toString();
      if(parseInt(str1)>parseInt(str2)){
        let temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }
  let str = ''
  for(let i=0;i<numbers.length;i++){
    str += str[i]
  }
  return str;
}