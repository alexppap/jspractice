function Fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n <= 39) {
    let [prev, curr] = [0, 1];
    for (let i = 0; i < n; i++) {
      [prev, curr] = [curr, prev + curr];
    }
    return prev;
  }
}
