class EventEmitter{
  constructor(){
    this.events={};
  }
  on(name,fn){
    if(!this.events[name]){
      this.events[name]=[fn];
    } else{
      this.events[name].push(fn);
    }
  }
  removeListener(name,fn){
    if(this.events[name]){
      this.events[name]=this.events[name].filter(cb=>{
       return cb!=fn;
      })
    }
  }
  emit(name,...args){
    if(this.events[name]){
      this.events[name].forEach(fn=>{
        fn.apply(this,args);
      })
        
    }
  }
  once(name, fn) {
    let one = function(...args) {
        fn.apply(this, args);
        this.removeListener(name, one);
    }

    this.on(name, one);
}
}

let em = new EventEmitter();
let workday = 0;
em.on("work", function() {
    workday++;
    console.log("work everyday");
});

em.once("love", function() {
    console.log("just love you");
});

function makeMoney() {
    console.log("make one million money");
}
em.on("money",makeMoney);

let time = setInterval(() => {
    em.emit("work");
    em.removeListener("money",makeMoney);
    em.emit("money");
    em.emit("love");
    if (workday === 5) {
        console.log("have a rest")
        clearInterval(time);
    }
}, 1000);