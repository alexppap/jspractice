/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
     var res = [];
    var me = head;
    while(me){
        res.push(me);
        me = me.next;
    }
    return res[res.length-k];
}