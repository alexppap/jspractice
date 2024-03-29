// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。

// 计数方法运用

function MoreThanHalfNum_Solution(numbers){
  var halfLen = numbers.length / 2;
  var obj = {}; //计数
  for(var i=0;i<numbers.length;i++){
    if(!obj[numbers[i]]){
      obj[numbers[i]] = 1;
    } else {
      obj[numbers[i]]++;
    }
  }
  for(var key in obj){
    if(obj[key] > halfLen){
      return key
    }
  }
  return 0;
}

//摩尔投票法
var majorityElement = function(nums) {
  let count = 1;
  let majority = nums[0];
  for(let i = 1; i < nums.length; i++) {
      if (count === 0) {
          majority = nums[i];
      }
      if (nums[i] === majority) {
          count ++;
      } else {
          count --;
      }
  }
  return majority;
};