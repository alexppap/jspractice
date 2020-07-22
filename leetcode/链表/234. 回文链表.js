var isPalindrome = function(head) {
  if(head === null) return null;
  const arr = [];
  while(head){
      arr.push(head.val);
      head = head.next;
  }
  let left = 0;
  let right = arr.length-1;
  while(left < right) {
      if(arr[left] !== arr[right] ){
          return false;
      }
      left++;
      right--;
  }
  return true;
};


//双指针
//剪掉后半段

var isPalindrome = function(head) {
  if(head === null) return true;
  let nextHalf = getNextHalf(head);
  let curHalf = reserve(nextHalf);
  while(head && curHalf) {
      if(head.val !== curHalf.val) return false;
      head = head.next;
      curHalf = curHalf.next;
  }
  return true;
};
const reserve = function(head) {
  let prev = null;
  let cur = head;
  while(cur) {
      let temp = cur.next;
      cur.next = prev;
      prev = cur;
      cur = temp;
  }
  return prev;
}
const getNextHalf = function(head) { // 获取链表的头半部分,返回链表的后半部分
  let slow = head;
  let fast = head;
  while(fast.next!== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  }
  let temp = slow.next;
  slow.next = null; // 切掉链表的后半部分
  return temp;
}


// 会阻塞dom解析的资源有：
// 1.内联css
// 2.内联js
// 3.普通外联js
// 4.外联defer js 
// 5.js之前的外联css