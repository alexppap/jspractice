// 斐波那契数列
function jumpFloor(n) {
  // write code here
  if (n == 1) {
    return 1;
  }
  let [prev, curr] = [1, 2];
  for (let i = 1; i < n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return prev;
}


//纯递归

// function jumpFloor(n) {
//   if (n == 1) {
//     return 1;
//   }
//   if (n == 2) {
//     return 2;
//   }
//   return jumpFloor(n - 1) + jumpFloor(n - 2);
// }
