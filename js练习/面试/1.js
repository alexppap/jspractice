function transform(num){
  var str = num.toString();
  var reg = /\B(?=(\d{3})+$)/g;
  return str.replace(reg, ",");
}
console.log(transform(123))