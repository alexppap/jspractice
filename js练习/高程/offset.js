//计算元素页面上偏移量
function getElementTop(element){
  var actualTop = element.offsetTop;
  var current = element.offsetParent;

  while(current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  return actualTop;
}

//计算元素页面左偏移量
function getElementLeft(element){
  var actualLeft = element.offsetLeft;
  var current = element.offsetParent;

  while(current !== null) {
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }
  return actualLeft;
}