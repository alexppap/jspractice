function Person(first, age, gender, interests) {
  this.name = first;
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name + '.');
};

function extend(Child,Parent){
  let F = function(){};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
}

function Teacher(first, age, gender, interests, subject){
  Person.call(this,first, age, gender, interests);
  this.subject = subject;
};
extend(Teacher,Person);
var a1 = new Person('john', 12, 4, 'football');
var a2 = new Teacher('john2', 122, 42, 'football2',44);
console.log(a2.greeting());