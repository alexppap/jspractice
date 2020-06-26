function Singleton(){
  this.instance = null;
}
//定义一个静态方法
Singleton.getInstance = function(){
  if(!this.instance){
      this.instance = new Singleton()
  }
  return this.instance
}

var a = Singleton.getInstance()
var b = Singleton.getInstance()

console.log(a === b)