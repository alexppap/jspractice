//动态规划
var findLength = function(A, B) {
  var n = A.length, m = B.length;
  var dp =  new Array(n+1);
  
for(var k = 0;k < dp.length; k++){
   dp[k] = new Array(m+1).fill(0);
}
        var ans = 0;
        for (var i = n - 1; i >= 0; i--) {
            for (var j = m - 1; j >= 0; j--) {
                dp[i][j] = A[i] == B[j] ? dp[i + 1][j + 1] + 1 : 0;
                ans = Math.max(ans, dp[i][j]);
            }
        }
        return ans;
}

// class Solution {
//   public int findLength(int[] A, int[] B) {
//       int n = A.length, m = B.length;
//       int ret = 0;
//       for (int i = 0; i < n; i++) {
//           int len = Math.min(m, n - i);
//           int maxlen = maxLength(A, B, i, 0, len);
//           ret = Math.max(ret, maxlen);
//       }
//       for (int i = 0; i < m; i++) {
//           int len = Math.min(n, m - i);
//           int maxlen = maxLength(A, B, 0, i, len);
//           ret = Math.max(ret, maxlen);
//       }
//       return ret;
//   }

// java 滑动窗口
//   public int maxLength(int[] A, int[] B, int addA, int addB, int len) {
//       int ret = 0, k = 0;
//       for (int i = 0; i < len; i++) {
//           if (A[addA + i] == B[addB + i]) {
//               k++;
//           } else {
//               k = 0;
//           }
//           ret = Math.max(ret, k);
//       }
//       return ret;
//   }
// }

