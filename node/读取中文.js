var fs = require('fs');

var rs = fs.createReadStream('F:/jspractice/node/read.md',{highWaterMark:11});
// rs.setEncoding('utf8')

var data = ''

rs.on('data',function(chunk){
  data += chunk;
})

rs.on('end',function(){
  console.log(data);
})