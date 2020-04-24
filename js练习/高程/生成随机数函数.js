function selectFrom (lowerValue,higherValue){
  var choices = higherValue - lowerValue + 1;
  return Math.floor(Math.random() * choices + lowerValue)
}
console.log(selectFrom(2,4))
