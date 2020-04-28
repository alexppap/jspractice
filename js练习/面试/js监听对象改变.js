//在ES5中可以通过Object.defineProperty来实现已有属性的监听 
Object.defineProperty(user,'name',{
  set:function(key,value){
  }
  })

  //在ES6中可以通过Proxy来实现 
  var  user = new Proxy({},{
    set:function(target,key,value,receiver){
    }
    })