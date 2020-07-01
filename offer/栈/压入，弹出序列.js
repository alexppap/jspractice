function IsPopOrder(pushV, popV){
  var stack = [];
  var index = 0;
  for(var i=0;i<pushV.length;i++){
    stack.push(pushV[i]);
    while(stack.length && stack[stack.length-1] === popV[index]){
      index++;
      stack.pop();
    }
  }
  return stack.length === 0;
}
