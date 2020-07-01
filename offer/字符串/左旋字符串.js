function LeftRotateString(str, n)
{
    // write code here
    if(!str){
        return '';
    }
    var str1 = '';
    for(var i=n;i<str.length;i++){
        str1 += str[i];
    }
    for(var j=0;j<n;j++){
        str1 += str[j];
    }
    return str1;
}