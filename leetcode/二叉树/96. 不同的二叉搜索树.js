//卡塔兰数  
​	
var numTrees = function(n) {
  let res = 1;
  for (let i = 0; i < n; i++) {
      res = 2 * res * (2 * i + 1) / (i + 2)
  }
  return res;
};

//动态规划
var numTrees = function(n) {
  const G = new Array(n + 1).fill(0);
  G[0] = 1;
  G[1] = 1;

  for (let i = 2; i <= n; ++i) {
      for (let j = 1; j <= i; ++j) {
          G[i] += G[j - 1] * G[i - j];
      }
  }
  return G[n];
};
