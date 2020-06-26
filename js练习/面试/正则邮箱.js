function checkEmail(str){
  var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
  if (re.test(str)) {
    console.log("ok");
  } else {
    console.log("nope");
  }
}
var userEmail = '123456@vip.qq.com'
checkEmail(userEmail)