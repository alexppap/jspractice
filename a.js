var line = readline();
var arr = line.split(',');
var target = arr.pop();
print(findSum (arr,target))

function findSum (arr,target) {
  var sum = 0;
  for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
      if(parseInt(arr[i])+parseInt(arr[j]) == parseInt(target)){
        sum = sum + i + j;
      }
    }
  }
  return sum;
}
