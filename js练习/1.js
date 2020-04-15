while(line = readline()){
  var arr = line.split(' ');
  print(jumpFloor(arr));
}
//牛客网打印js

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