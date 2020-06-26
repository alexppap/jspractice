// 双指针

function FindFirstCommonNode(pHead1, pHead2)
{
    var p1 = pHead1;
    var p2 = pHead2;
    while(p1!=p2){
        p1 = p1!=null ? p1.next : pHead2;
        p2 = p2!=null ? p2.next : pHead1;
    }
    return p1;
}