
//先根据身高降序排序，身高相同，按k值升排序
//最后按k插入到对应位置
var reconstructQueue = function(people) {
  let res=[];
  if(!people||!people.length){return []}
  people.sort((a,b)=>{
      if(a[0]===b[0]){
          return a[1]-b[1]
      }else{
          return b[0]-a[0]
      }
  })
  for(let i=0;i<people.length;i++){
      res.splice(people[i][1],0,people[i])
  }
  return res;
};
