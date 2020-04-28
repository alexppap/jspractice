function resetStack (n){
  const res = [];
  for(let j=n;j>0;j--){
    res.unshift(j);
    let x =res.pop();
    res.unshift(x);
  }
  return res;
}