/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let i=0;
  let j=0;
  let n = s.length;
  let m = t.length;
  while(i<n && j<m){
      if(s[i] == t[j]){
          i++;
      }
      j++;
  }
  return n == i;
  
};