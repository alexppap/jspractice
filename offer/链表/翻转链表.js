/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    var pre,curr,temp;
    curr = pHead;
    while(curr!==null){
        temp = curr.next; //保存下一个节点
        curr.next = pre; // 将箭头指向上一个结点
        pre = curr; //到下一个结点
        curr = temp;
    }
    return pre;
}