function add(x){
  return function(y){
    return x+y;
  }
}
console.log(add(4)(2))