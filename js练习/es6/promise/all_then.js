//有一个失败则返回失败结果，有多个成功则返回成功值数组
const p1 = new Promise((resolve, reject) => {
  resolve(1)
})

const p2 = new Promise((resolve, reject) => {
  resolve(2)
})

const p3 = new Promise((resolve, reject) => {
  reject('error')
})

const pAll1 = Promise.all([p1,p2,p3]);
const pAll2 = Promise.all([p1,p2]);
pAll1.then(
  values =>{
    console.log(values)
  },
  reason =>{ 
    console.log(reason)
  }
) //error

pAll2.then(
  values =>{
    console.log(values)
  },
  reason =>{ 
    console.log(reason)
  }
) // [1,2]

// race方法根据时间返回第一个 promise对象，可配合定时器使用
const pRace = Promise.race([p3,p1,p2])

pRace.then(
  value =>{
    console.log(value)
  },
  reason =>{ 
    console.log(reason)
  }
) //error 