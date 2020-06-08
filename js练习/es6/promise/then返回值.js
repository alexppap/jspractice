new Promise((resolve, reject) => {
  resolve(1)
}).then(
  value => {
    console.log('onResolved1', value)
    // return 2;
    // return Promise.resolve(2);
    // return Promise.reject(3);
    throw 5;
  },
  reason => {
    console.log('onRejected1', reason)
  }
).then(
  value => {
    console.log('onResolved2', value)
  },
  reason => {
    console.log('onRejected2', reason)
  }
)