// .toString().replace(/\B(?=(\d{3})+$)/g

function transform (num){
  return num.toString().replace(/\B(?=(\d{3})+$)/g, ",")
}

console.log(transform(10033434))

//包含小数点
function thousands(num){
  var str = num.toString();
  var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  return str.replace(reg,"$1,");
}

console.log(thousands(-1234567.1234567))

console.log(thousands(12345644))

// 综合解法
function thousands2(num){
  var str = num.toString();
  var reg = str.indexOf(".") > -1 ? /\B(?=(\d{3})+\.)/g : /\B(?=(\d{3})+$)/g;
  return str.replace(reg,",");
}

console.log(thousands2(-1234567.1234567))

console.log(thousands2(2232.33))

var reg = /\B(?=(\d{3})+$)/g