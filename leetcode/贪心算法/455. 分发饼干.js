//用最小的饼干满足最小渴望的人，如果此饼干满足不了，则换一块更大的;
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let num = 0;
  let slen = s.length;
  let glen = g.length;
  let i = 0,
    j = 0;
  while (i < slen && j < glen) {
    if (s[i] >= g[j]) {
      num++;
      i++;
      j++;
    } else {
      i++;
    }
  }
  return num;
};
