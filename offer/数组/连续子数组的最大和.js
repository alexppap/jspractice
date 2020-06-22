//设置第一个值为基准

function FindGreatestSumOfSubArray(array)
{
    // write code here
    var max = array[0];
    var pre = array[0];
    for(var i=1;i<array.length;i++){
        if(pre<0){
            pre = 0;
        }
        max = Math.max(max,pre+array[i]);
        pre = pre+array[i];
    }
    return max;
    
}