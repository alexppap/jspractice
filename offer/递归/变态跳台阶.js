function jumpFloorII(number)
{
  let arr=[1,2,4];
  let sum=0
  for(let i=3;i<number;i++){
    for(let j=0;j<arr.length;j++){
      sum+=arr[j];
    }
    arr[i]=sum+1;
    sum=0;
  }
  return arr[number-1];
}