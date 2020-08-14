//上下翻转，左右翻转
var rotate = function(matrix) {
  const n = matrix.length;
  let count = (n / 2) | 0;
  for (let i = 0; i < count; i++) {
      for (let j = 0; j < n; j++) {
          let tmp = matrix[i][j];
          matrix[i][j] = matrix[n-i-1][j];
          matrix[n-i-1][j] = tmp;
      }
  }

  for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
          let tmp = matrix[i][j];
          matrix[i][j] = matrix[j][i];
          matrix[j][i] = tmp;
      }
  }
};
