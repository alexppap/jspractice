function rectCover(number) {
  // write code here
  var n = number;
  if (n < 1) {
    return 0;
  }
  if (n == 1 || n == 2) {
    return n;
  } else {
    return rectCover(number - 1) + rectCover(number - 2);
  }
}
