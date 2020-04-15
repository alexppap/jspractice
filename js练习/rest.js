function add(...values){
  let sum=0;
  for(var val of values) {
    sum+=val;
  }
  return sum;
}
add(1,2,3)

Math.max.apply(null, [1,2,3])
//es5
Math.max(...[1,2,3])
//es6