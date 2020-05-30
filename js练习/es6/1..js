function resetStack (n){
  const res = [];
  for(let j=n;j>0;j--){
    res.unshift(j);
    let x =res.pop();
    res.unshift(x);
  }
  return res;
}

function MoreThanHalfNum_Solution(numbers)
{
    const halflen = numbers.length / 2;
    const obj = {};
    for(let i=0;i<numbers.length;i++){
      if(!obj[numbers.charAt(i)]){
        obj[numbers.charAt(i)] = 1;
      } else {
        obj[numbers.charAt(i)] ++;
      }
    }
    for(let key in obj){
      if(obj[key]>halflen){
        return obj[key];
      }
    }
    return 0;
}
