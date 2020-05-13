//程序运行完成时一定要有输出语句，本工具才能正确展示运行结果。 
class eventEmitter {
  constructor() {
      this.events = {};
  }

  on(name, fn) {
      if (!this.events[name]) {
          this.events[name] = [fn];
      } else {
          this.events[name].push(fn);
      }
  }

  off(name, fn) {
      if (this.events[name]) {
          this.events[name] = this.events[name].filter(cb => {
              return cb != fn;
          })
      }
  }

  emit(name, ...args) {
      if (this.events[name]) {
          this.events[name].foreach(fn => {
              fn.apply(this, args);
          })
      }
  }

  once(name, fn) {
      let one = function(...args) {
          fn.apply(this, args);
          this.off(name, one);
      }

      this.on(name, one);
  }
}