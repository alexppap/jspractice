function findMaxApper(str){
  var obj={};
  //创建一个对象存储最多出现的字母和个数
  for (let i=0;i<str.length;i++) {
    if (!obj[str.charAt(i)]) {
      obj[str.charAt(i)]=1;
    } else{
      obj[str.charAt(i)]++;
    }
    }
    //查询字符每一位在对象中是否存在，否，赋值为1，是，加一
    let max=0;//max为出现的最多次数
    let charMax;//charMax为出现最多的字母
    for (let key in obj) {
      if (obj[key]>max) {
        max=obj[key];
        charMax=key;
      }
  }
  const res='出现最多字母'+ charMax+' 次数为'+ max;
  return res;
}