function HasSubtree(pRoot1, pRoot2) {
  var res = false;
  if(pRoot1 !==null && pRoot2 !== null){
    if(pRoot1.val === pRoot2.val){
      res = checkoutTree(pRoot1,pRoot2);
    }
    if(!res){
      res = HasSubtree(pRoot1.left,pRoot2);
    }
    if(!res){
      res = HasSubtree(pRoot1.right,pRoot2);
    }
  }
  return res;
}

function checkoutTree(node1,node2){
  if(!node1 && node2!==null){
    return false;
  }
  if(!node2){
    return true;
  }
  if(node1.val !== node2.val){
    return false;
  }

  return checkoutTree(node1.left,node2.left) && checkoutTree(node1.right,node2.right);
}
