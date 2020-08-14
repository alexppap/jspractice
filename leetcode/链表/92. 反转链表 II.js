/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if(head == null){
      return null;
  }
  let curr = head;
  let pre = null;
  let temp;
  while(m>1){
      pre = curr;
      curr = curr.next;
      m--;
      n--;
  }
  let con = pre;
  let tail = curr;
  while(n>0){
      temp = curr.next; //保存下一个节点
      curr.next = pre; // 将箭头指向上一个结点
      pre = curr; //到下一个结点
      curr = temp;
      n--;
  }
  if(con!=null){
      con.next = pre;
  } else{
      head = pre;
  }
  tail.next = curr;
  return head;
};