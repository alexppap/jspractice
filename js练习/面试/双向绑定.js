function observer(vm, key, value) {
  Object.defineProperty(vm, key, {
      enumerable: true,
      configurable: true,
      get: function () {
          console.log('Get');
          return value
      },
      set: function (newValue) {
          if (value !== newValue) {
              value = newValue
              console.log('Update')

              //将变动通知给相关的订阅者
              dep.notify(newValue)
          }
      }
  })
}