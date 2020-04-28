function promise () {
  this.msg = '';
  this.status = 'pending';
  var that = this;
  var process = arguments[0]

  process(function(){
    that.status = 'fulfilled';
    that.msg = arguments[0];
  },function(){
    that.status = 'rejected';
    that.msg = arguments[0];
  })
  return this;
}

promise.prototype.then = function () {
  if(this.status === 'fulfilled') {
    arguments[0](this.msg);
  } else if(this.status === 'rejected' && arguments[1]){
    arguments[1](this.msg);
  }
}

//极简单的promise的封装