//子集
//indexOf
var intersect = function(nums1, nums2) {
  let res = [];
  for(let i=0;i<nums1.length;i++){
      let index = nums2.indexOf(nums1[i])
      if(index > -1) {
          res.push(nums1[i]);
          nums2.splice(index,1)
      }
  }
  return res;
};

//hash表
const intersect = (nums1, nums2) => {
  const map = {};
  const res = [];
  for (const num1 of nums1) { // 存下nums1数字的出现次数
    if (map[num1]) {
      map[num1]++;  
    } else {         
      map[num1] = 1; 
    }
  }
  for (const num2 of nums2) { // 遍历nums2看看有没有数字在nums1出现过
    const val = map[num2];
    if (val > 0) {            // 出现过
      res.push(num2);         // 推入res数组
      map[num2]--;            // 匹配掉一个，就少了一个
    }
  }
  return res;
};
