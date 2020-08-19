const hasGroupsSizeX = function(deck) {
  let newMap = new Map();
   deck.forEach((item)=>{
     newMap.set(item,newMap.has(item)?newMap.get(item)+1:1)
   })
   let arr = newMap.values();
   let newArr = [...arr];
   let g = newArr[0];
   newArr.forEach((time)=>{
     g = gcd(g,time);
   })
   return g>=2;
};
function gcd (a,b){
    return b===0 ? a : gcd(b,a % b);
}