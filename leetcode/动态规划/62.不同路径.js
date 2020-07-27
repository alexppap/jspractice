//dp[j][k] = dp[j-1][k] + dp[j][k-1];
//
var uniquePaths = function(m, n) {
  let dp = new Array(m);
  for(let i=0;i<m;i++){
      dp[i] = new Array(m);
      dp[i][0] = 1;
  }
  for(let i=0;i<n;i++){
      dp[0][i] = 1;
  }
  for(let j=1;j<m;j++){
      for(let k=1;k<n;k++){
          dp[j][k] = dp[j-1][k] + dp[j][k-1];
      }
  }
  return dp[m-1][n-1];
};

//java
// class Solution {
//   public int uniquePaths(int m, int n) {
//       int[][] dp = new int[m][n];
//       for (int i = 0; i < n; i++) dp[0][i] = 1;
//       for (int i = 0; i < m; i++) dp[i][0] = 1;
//       for (int i = 1; i < m; i++) {
//           for (int j = 1; j < n; j++) {
//               dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//           }
//       }
//       return dp[m - 1][n - 1];
//   }
// }