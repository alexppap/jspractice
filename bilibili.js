while(line = readline()){
  var arr = line.split(' ');
  print(jumpFloor(arr));
}
//牛客网打印js例子

var num=parseInt(readline());
var line=readline();
var sum=parseInt(readline());
var arr = line.split(' ');
print(twoSum (arr, sum));

function vsort(data){
  const temp = version.map(v=>v.split('.'));
  for(let i=0;i<temp.length;i++){
    let minidx = i;
    for(let j=i;j<temp.length;j++){
      for(let k=0;k<temp.length;k++){
        let curr = +temp[j][k];
        let min = +temp[minidx][k];
        if(curr<min){
          minidx = k;
        }
        if(curr !== min){
          break;
        }
      }
    }
    [temp[i],temp[minidx]] = [temp[minidx],temp[i]];
  }
  return temp.map(v=>v.join('.'));
}