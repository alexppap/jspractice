function LastRemaining_Solution(n, m)
{
    // write code here
    if(n<1 || m<1){
        return -1;
    }
    var i=-1,step=0,count=n;
    var arr = []
    while(count > 0){
        i++;
        if(i>=n){
            i=0;
        }
        if(arr[i]===-1){
            continue;
        }
        step++;
        if(step === m){
            arr[i] = -1;
            step =0;
            count--;
        }
    }
    return i;
}

//数学归纳法
function LastRemaining_Solution(n, m)
{
    // write code here
    if(n<1 || m<1){
        return -1;
    }
    var s=0;
    for(var i=2;i<=n;i++){
        s = (s+m)%i;
    }
    return s;
}