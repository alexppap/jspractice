/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function(head) {
  if (head == null) return head;
  var curr = head.next
  var prev = head;
  var arr = [];
  arr.push(head.val);
  while(curr){
      if(arr.indexOf(curr.val)===-1){
          arr.push(curr.val);
          prev = prev.next; 
      } else{
          prev.next = curr.next;
      }
      curr = curr.next;
  }
  return head;
};