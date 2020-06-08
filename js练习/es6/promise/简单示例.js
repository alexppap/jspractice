const p3 = new Promise((resolve, reject) => {
  resolve('成功的数据');
  // reject('失败的数据')
}).then((value => {
  console.log('onResolved()1',value)
})).catch(reason =>{
  console.log('onRejected()1',reason)
})

const p1 = new Promise((resolve, reject) => {
  resolve(1)
}).then(value => {console.log(value)});

const p2 = Promise.resolve(2);
p2.then(value => {console.log(value)})