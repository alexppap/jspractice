var dailyTemperatures = function (T) {
  let res = [];
  for (let i = 0; i < T.length - 1; i++) {
    for (let j = i + 1; j < T.length; j++) {
      if (T[j] > T[i]) {
        res[i] = j - i;
        break;
      } else {
        res[i] = 0;
      }
    }
  }
  res.push(0);
  return res;
};

// 当前项向左找第一个比自己大的位置 —— 从左向右维护一个单调递减栈
// 当前项向左找第一个比自己小的位置 —— 从左向右维护一个单调递增栈
// 当前项向右找第一个比自己大的位置 —— 从右向左维护一个单调递减栈
// 当前项向右找第一个比自己小的位置 —— 从右向左维护一个单调递增栈/

const dailyTemperatures = (T) => {
  const res = new Array(T.length).fill(0);
  let stack = [];
  for (let i = T.length - 1; i >= 0; i--) {
    while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length) {
      res[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }
  return res;
};
