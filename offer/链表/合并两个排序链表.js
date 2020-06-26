//递归思想

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    if (pHead1 === null){
        return pHead2;
    }
    if (pHead2 === null){
        return pHead1;
    }
    if (pHead1.val<=pHead2.val){
        var h = pHead1;
        h.next = Merge(pHead1.next, pHead2);
    } else{
        var h = pHead2;
        h.next = Merge(pHead1, pHead2.next);
    }
    return h;
}


