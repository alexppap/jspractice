/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let index = 0;
  for(let i=0;i<nums.length;i++){
      index++;
      if(nums[i] == 0){
          nums.push(nums.splice(i,1));
          i--;
          if(index>=nums.length){
              break;
          }
      }
  }
  return nums;
};