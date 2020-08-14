var addTwoNumbers = function(l1, l2) {
  let node = new ListNode('head');
  let temp = node;
  let n=0;
  while(l1 || l2){
      const n1 = l1 ? l1.val : 0
      const n2 = l2 ? l2.val : 0
  temp.next = new ListNode((n1+n2+n)%10);
  n = Math.floor((n1+n2+n)/10);
  temp = temp.next;
    if(l1) l1=l1.next;
    if(l2) l2=l2.next;
    
  }
  if(n>0) temp.next = new ListNode(n);
  return node.next;
};