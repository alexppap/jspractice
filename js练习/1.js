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
function twoSum (arr, sum) {
    let len = arr.length
    let i = 0
    let j = len - 1
    if (len<2) return "notfound"
    while(i<j) {
        let res = arr[i] + arr[j]
        if (res === sum) return [arr[i], arr[j]].join(' ')
        if (res > sum) {
            j--
            continue
        }
        if (res < sum) {
            i++
        }
    }
    return "notfound"
}


function IsContinuous(numbers)
{
    var arr = [-5]
    for(var i=0;i<13;i++){
        arr.push(0);
    }
    var len = numbers.length;
    var min = 14;
    var max = -1;
    if(len!==5){
        return false;
    }
    for(var j=0;j<len;j++){
        arr[numbers[j]]++
        if(numbers[j] === 0){
            continue;
        }
        if(arr[numbers[j]]>1){
            return false;
        }
        if(numbers[i]>max){
            max = numbers[j];
        }
        if(numbers[i]<min){
            min = numbers[j];
        }
    }
    return max - min < 5;
}