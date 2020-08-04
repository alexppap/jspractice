function transform(num){
  var str = num.toString();
  var reg = /\B(?=(\d{3})+$)/g;
  return str.replace(reg, ",");
}
console.log(transform(123))


var sortColors = function(nums) {
   let arr = new Array(3).fill(0);
   let res = [];
   for(let i=0;i<nums.length;i++){
       arr[nums[i]]++;
   }
   for(let i=0;i<3;i++){
       for(let j=0;j<arr[i];j++){
           res.push(i);
       }
   }
   return res;
};
console.log(sortColors([2,2,1,1,0,0]))