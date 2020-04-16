//阶乘函数
function factorial(){
  if(num<=1){
    return 1;
  }else{
    return num*factorial(num-1);
  }
}
//解耦
function factorial(){
  if(num<=1){
    return 1;
  }else{
    return arguments.callee(num-1);
  }
}