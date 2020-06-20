//?foo=bar&baz=val

var url = require('url')
var url1= 'http://nodejs.cn?foo=bar&baz=val'

var query = url.parse(url1,true).query
//var query = url.parse(req.url,true).query
console.log(query)
