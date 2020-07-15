var calPoints = function(ops) {
  let stack = [];
  for(let j=0;j<ops.length;j++){
      if(ops[j] === 'D'){
          stack.push(stack[stack.length-1] * 2)
      } else if(ops[j] === '+'){
          stack.push(stack[stack.length-1] + stack[stack.length-2])
      } else if(ops[j] === 'C'){
          stack.pop();
      } else {
          stack.push(parseInt(ops[j]))
      }
  }
  let s = 0;
  for(let i=0;i<stack.length;i++){
      s += stack[i];
  }
  return s;
};