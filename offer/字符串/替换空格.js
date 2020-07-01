function replaceSpace(str)
{
    var newStr = ''
    for (var i=0;i<str.length;i++){
        if(str[i] === " "){
            newStr += '%20'
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

// function replaceSpace(str)
// {
//     return str.replace(/\s/g,'%20')
// }