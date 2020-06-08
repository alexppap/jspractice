let exp = new Promise((resolve,reject)=>{
  let i = 1;
  resolve(i)
})

exp.then((value)=>{
  console.log(value);
  value++;
  return value;
}).then((value)=>{
  console.log(value)})