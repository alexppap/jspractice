var arr = [1,2,2,3,3,4]
var arr2 = [1,2,2,3,3,4]
function newarr (arr) {
  var res = [];
  for (var i in arr) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i])
    }
  }
  return res;
}
// console.log(newarr(arr))
console.log(Array.from(new Set(arr)))
console.log([...new Set(arr)])

function duplication(arr){
  let map =new Map();
  let res = [];
  for(let i in arr){
    if(map.has(arr[i])){
      map.set(arr[i],true);
    }else{
      map.set(arr[i],false);
      res.push(arr[i])
    }
  }
  return res;
}
console.log(duplication(arr2))


var addTwoNumbers = function(l1, l2) {
  let node = new ListNode('head');
  let temp = node;
  let n=0;
  let sum;
  while(l1 || l2){
  const n1 = l1 ? ll.val : 0;
  const n2 = l2 ? l2.val : 0;
  temp.next = new ListNode((n1+n2+n)%10);
  n = Math.floor((n1+n2+n)/10);
    if(l1) l1=l1.next;
    if(l2) l2=l2.next;
    temp = temp.next;
  }
  if(n>0) temp.next = new ListNode(n);
  return node.next;
};