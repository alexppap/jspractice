//暴力法

var rotate = function(nums, k) {
  var temp;
  var pre;
  for(var i=0;i<k;i++){
      pre = nums[nums.length-1];
      for(var j=0;j<nums.length;j++){
          temp = nums[j];
          nums[j] = pre;
          pre = temp;
          
      }
  }
  return nums;
};

//splice法
var rotate = function(nums, k) {
  return nums.splice(0,0,...nums.splice(nums.length-k));
};

//辅助数组
var rotate = function(nums, k) {
  var n = nums.length;
  var newArr = new Array(n);
  for(var i = 0;i<n;i++){
      newArr[(i+k)%n] = nums[i];
  }    
  for(var r = 0;r<n;r++){
      nums[r] = newArr[r];
  }    
}
