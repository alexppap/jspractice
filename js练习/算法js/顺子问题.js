//由于所有扑克牌都在1到13之间，可以使用一个与之长度相等的数组来存储出现的次数，类似hash表

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
        if(numbers[j]>max){
            max = numbers[j];
        }
        if(numbers[j]<min){
            min = numbers[j];
        }
    }
    return max - min < 5;
}