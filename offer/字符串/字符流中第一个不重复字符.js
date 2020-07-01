//Init module if you need
let obj = {};
function Init()
{
    obj = {};
}
//Insert one char from stringstream
function Insert(ch)
{
    // write code here
    obj[ch] = obj[ch] ? obj[ch]+1 : 1;
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // write code here
    for(let key in obj){
        if(obj[key] === 1){
            return key
        }
    }
    return '#';
}