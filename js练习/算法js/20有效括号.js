var isValid = function(s) {
  if(s === ''){
      return true;
  }
  let stack = [];
  for(let i=0;i<s.length;i++){
      if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
          stack.push(s[i]);
      }
      if(s[i] === ']') {
          let pre = stack.pop()
          if(pre !== '[' ){
              return false
          }
      }
      if(s[i] === ')') {
          let pre = stack.pop()
          if(pre !== '(' ){
              return false
          }
      }
      if(s[i] === '}') {
          let pre = stack.pop()
          if(pre !== '{' ){
              return false
          }
      }
  }
  if(stack.length === 0){
      return true;
  } else {
      return false;
  }
};