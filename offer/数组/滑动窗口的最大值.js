function maxInWindows(num, size)
{
    // write code here
    let res = [];
    if(size > num.length || size===0){
        return [];
    }
    for(let i=0;i<num.length;i++){
        let tmpArr = num.slice(i,i+size)
        if(i+size<=num.length){
            res.push(Math.max.apply(null,tmpArr))
        } else {
            break;
        }
    }
    return res;
}