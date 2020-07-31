var lengthOfLongestSubstring = function(s) {
  let res = [];
  let max = 0;
  for(let i=0;i<s.length;i++){
  let index = res.indexOf(s[i]);
     if(index!==-1){
         res.splice(0, index+1);
     }
      res.push(s[i]);
      max = Math.max(max,res.length); 
  }
  return max;
};