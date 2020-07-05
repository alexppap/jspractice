function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length==0){
        return 0;
    }
    for(var i=0,length=rotateArray.length-1;i<length;i++){
        if(rotateArray[i]>rotateArray[i+1]){
            return rotateArray[i+1];
        }
    }
    
}