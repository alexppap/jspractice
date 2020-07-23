//先排序，再比较

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let snums = nums.slice(0);
  nums.sort((a,b)=>a-b);
  let start = snums.length, end = 0;
  for(let i= 0;i<nums.length;i++){
      if(nums[i] !== snums[i]){
           start = Math.min(i,start);
           end = Math.max(i,end);
      }
  }
  return end - start >= 0 ? (end - start + 1) : 0;
};