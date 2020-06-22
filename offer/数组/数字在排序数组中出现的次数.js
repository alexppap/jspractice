function GetNumberOfK(data, k)
{
    // write code here
    var count = 0;
    for(var i=0;i<data.length;i++){
        if(data[i]===k){
            count++;
        }
    }
    return count;
}