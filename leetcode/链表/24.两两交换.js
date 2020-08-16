var swapPairs = function(head) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head
  let pre =  dummyHead;
  let curr = head;
  let temp,next;
  while(curr!==null && curr.next!==null){
      temp = curr.next;
      next = temp.next;
      temp.next = curr;
      curr.next = next;
      pre.next = temp;
      pre = curr;
      curr = next;
  }
  return dummyHead.next;
};