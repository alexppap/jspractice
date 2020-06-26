class Promise {
  constructor(fn){
    this.status = 'pending';
    this.resolve = undefined;
    this.reject = undefined;

    let resolve = value =>{
      if (this.status === 'pending') {
        this.status = 'resolved';
        this.resolve = value;
      }
    }
    let reject = value => {
      if (this.status === 'pending') {
          this.status = 'rejected';
          this.reject = value;
      }
  }
    try{
      fn(resolve, reject)
    }catch(e){
      reject(e)
    }

}

  then(onResolved, onRejected) {
    switch (this.status) {
        case 'resolved': onResolved(this.resolve); break;
        case 'rejected': onRejected(this.resolve); break;
        default:
    }
  }
}

//promise.all
function promiseAll(promises) {
  if (!isArray(promises)) {
      throw new Error("promises must be an array")
  }
  return new Promise(function (resolve, reject) {

      let promsieNum = promises.length;
      let resolvedCount = 0;
      let resolveValues = new array(promsieNum);
      for (let i = 0; i < promsieNum; i++) {
          Promise.resolve(promises[i].then(function (value) {
              resolveValues[i] = value;
              resolvedCount++;
              if (resolvedCount === promsieNum) {
                  return resolve(resolveValues)
              }
          }, function (reason) {
              return reject(reason);
          }))

      }
  })
}

// function promiseAll (promises){
//   if(!isArray(promises)){
//     throw new Error('NOT array');
//   }
//   return new Promise(function(resolve,reject){
//     let num = promises.length;
//     let resolveCount = 0;
//     let resolveValues = new Array(num);

//     for(let i=0;i<num;i++){
//         Promise.resolve(promises[i].then(function(value){
//           resolveValues[i] = value;
//           resolveCount ++;
//           if(resolveCount == num){
//             return resolve(resolveValues);
//           }
//         },
//         function(reason){
//           return reject(reason)
//         }
//         ))
//     }
//   })
// }

class Promise {
  constructor(fn){
    this.status = 'pending';
    this.resolve = undefined;
    this.reject = undefined;

    let resolve = value =>{
      if (this.status === 'pending') {
        this.status = 'resolved';
        this.resolve = value;
      }
    }
    let reject = value =>{
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reject = value;
      }
  }
  try{
    fn(resolve,reject)
  } catch(e){
    reject(e)
  }
}
}