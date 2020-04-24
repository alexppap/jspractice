function reOrderArray(array)
{
   let leftArr = [];
   let rightArr = [];
   for(let i=0;i<array.length;i++){
     if(array[i]%2==1){
      leftArr.push(array[i])
     } else{
      rightArr.push(array[i])
     }
   }
   return leftArr.concat(rightArr)
   
}