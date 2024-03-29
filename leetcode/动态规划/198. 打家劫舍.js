/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(!nums.length){
      return 0;
  }
  let dp = [];
  for(let i=nums.length-1;i>=0;i--){
      let robNow = nums[i] + (dp[i+2] || 0);
      let robNext = dp[i+1] || 0;
      dp[i] = Math.max(robNow,robNext);
  }
  return dp[0];
};