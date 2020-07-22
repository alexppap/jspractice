// 三重循环与双指针

const threeSum = function(nums) {
  if(nums.length < 3){
    return [];
  }
  const res = [];
  nums.sort((a,b)=> a-b); //排序

  for(let i=0;i<nums.length;i++){
    if (nums[i] > 0) { 
      return res; 到正值后怎么相加都不会为0
    }
    if(i>0 && nums[i] === nums[i-1]){
      continue; //遇到同样元素，跳过
    }
    let l = i+1;
    let r = nums.length-1;
    while(l < r){
      let temp = nums[i] + nums[l] + nums[r];
      if(temp > 0) {
        r--;
      } else if (temp < 0){
        l++;
      } else{
        res.push([nums[i], nums[l], nums[r]]);
        while(l < r && nums[l] === nums[l+1]){
        l++; //遇到同样元素，跳过
      }
      while(l < r && nums[r] === nums[r-1]){
        r--; //遇到同样元素，跳过
      }
      l++;
      r--;
      }
    }
  }
  return res;
};