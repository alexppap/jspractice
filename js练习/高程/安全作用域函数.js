function Person(name,age,job){
  if(this instanceof Person){
    this.name=name;
    this.age=age;
    this.job=job;
  }else{
    return new Person(name,age,job);
  }
}
var person1 = Person('alex','22','football player')
console.log(person1.name)
console.log(window.name)

//如要继承使用原型链继承或寄生组合继承