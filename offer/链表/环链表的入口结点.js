function EntryNodeOfLoop(pHead)
{
    // write code here
    if(pHead==null || pHead.next==null || pHead.next.next==null){
      return null;
    }
    var fast = pHead.next.next;
    var slow = pHead.next;
    while (fast && slow){
      if(slow !== fast){
        slow = slow.next;
        fast = fast.next.next;
      } else {
        break;
      }
    }
    fast = pHead;
    while(fast !== slow){
      fast = fast.next;
      slow = slow.next;
    }
    return fast;
}