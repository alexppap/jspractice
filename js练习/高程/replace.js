//替换一个
var text = 'cat, bat, sat, fat';
var result = text.replace('at', 'ond');
console.log(result)

//替换全部
result = text.replace(/at/g,'ond')
console.log(result)


var text = 'cat, bat, sat, fat';
var result = text.replace(/at/g,'word ($1)');
console.log(result)

//replace(/\B(?=(\d{3})+$)/g, ',')