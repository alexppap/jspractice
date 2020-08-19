var isPalindrome = function(x) {
  let X = x
if(x < 0) {
  return false
}else {
  let y = 0
  while(Math.floor(x) >= 1) {
      let remain = x % 10;
      y = y * 10 + remain;
      x = Math.floor(x / 10);
  }
  if(X == y) {
      return true
  }else {
      return false
  }        
}
}

