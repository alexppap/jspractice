
//hash表
var findDisappearedNumbers = function(nums) {
  let res = [];
  let n = nums.length
 const data = new Array(n).fill(0);
  for(let i=0;i<n;i++){
      data[nums[i]-1]++
  }
  for(let j=0;j<n;j++){
      if(data[j] === 0){
          res.push(j+1);
      }
  }
  return res;
};

//原地hash
var findDisappearedNumbers = function(nums) {
  let res = [];
  let n = nums.length
  for(let i=0;i<n;i++){
      const absNum = Math.abs(nums[i])
      if(nums[absNum-1]>0){
          nums[absNum-1] *= -1 ;
      }
  }
  for(let j=0;j<n;j++){
      if(nums[j]>0){
          res.push(j+1);
      }
  }
  return res;
};