function FindNumbersWithSum(array, sum)
{
    // write code here
   let res = [];
   if(array.length<2){
     return res;
   }
   let i=0;
   let j=array.length-1;
   while(i<j){
     if(array[i] + array[j] === sum){
       res.push(array[i]);
       res.push(array[j]);
       break;
     } else if(array[i] + array[j] < sum){
       i++
     } else{
       j--;
     }
   }
   return res;
}