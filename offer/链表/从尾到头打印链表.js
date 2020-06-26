function printListFromTailToHead(head)
{
    var res = [];
    var me = head;
    while(me){
        res.push(me.val);
        me = me.next;
    }
    return res.reverse();
}