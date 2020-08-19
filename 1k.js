function add1(n){
  if(n==1){
    return 1;
  }
  return n + add1(n-1);
}

console.log(add1(100))