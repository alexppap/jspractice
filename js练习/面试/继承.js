function Father() {}
function Child() {}
//1.原型继承
Child.prototype = new Father();
// 特点：基于原型链，既是父类的实例，也是子类的实例
// 缺点：无法实现多继承 

//2.构造继承
function Child(name) {
  Father.call(this, name);
}
// 特点：可以实现多继承 
//缺点：只能继承父类实例的属性和方法，不能继承原型上的属性和方法。

//3.组合继承
function Child(name) {
  Father.call(this, name);
}
Child.prototype = new Father();
//结合以上两种方法

//寄生继承
function cloneonj(o) {
  var clone = Object.create(o);
  clone.sayName = function() {
    //...
  }
  return clone;
}

//寄生组合继承
function Child(name) {
  Father.call(this, name);
  (function(){
    // 创建一个没有实例方法的类 
    var Super = function() {};
    Super.prototype = Father.prototype;
    ///将实例作为子类的原型
    Child.prototype = new Super();
  })()
}