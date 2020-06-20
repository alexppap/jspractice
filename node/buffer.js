var str = '深入浅出node.js';
var buf = new Buffer(str, 'utf-8');
console.log(buf)

var buf1 = new Buffer(100);
console.log(buf1.length) //100

buf1[10] = -100
buf1[20] = 3.14
console.log(buf1[10]) //156 -100+256
console.log(buf1[20]) // 3  舍弃小数部分

// new Buffer(str,[encoding])
// buf1.toString([encoding],[start],[end])

const buf4 = Buffer.from('hello world', 'utf8');
console.log(buf4)