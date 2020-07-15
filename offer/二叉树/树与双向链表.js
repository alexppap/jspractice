function Convert(pRootOfTree)
{
    var p = pRootOfTree;
    var pre;
    var root;
    var nodestack = [];
    var flag = true;
    while(p !== null || nodestack.length>0){
        while(p){
            nodestack.push(p);
            p = p.left
        }
        p = nodestack.pop();
        if(flag === true){
            root = p;
            pre = root;
            flag = false;
        }else{
            pre.right = p;
            p.left = pre;
            pre = p
        }
            p = p.right;
    }
    return root;
}