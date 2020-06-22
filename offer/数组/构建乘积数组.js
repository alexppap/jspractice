function multiply(array)
{
    var res = [];
    for(var j=0;j<array.length;j++){
      res[j] = 1;
      for(var i=0;i<array.length;i++){
        if(i!=j){
          res[j]*=array[i]
        }
      }
    }
    return res;
}