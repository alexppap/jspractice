/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

// 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5

function deleteDuplication(pHead)
{
    // write code here
    var Head = new ListNode('head');
    Head.next = pHead;
    var prev = Head;
    var curr = Head.next;
    while(curr){
        while(curr.next !==null && curr.next.val === curr.val){
          curr = curr.next;
        }
        if(prev.next === curr){
          prev = curr;
          curr = curr.next;
        } else{
          curr = curr.next;
          prev.next = curr;
        }
    }
    return Head.next;
}