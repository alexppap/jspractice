var fs = require('fs')


// 检测次数的变量,实现多对一
var after = function(times,callback){
  var count = 0, results = {};
  return function(key,value){
    results[key] = value;
    count ++
    if(count === times){
      callback(results)
    }
  }
}
var done = after(times,render)

fs.readFile(template_path,"utf-8",function(err,template){
  done("template",template)
})
db.query(sql,function(err,data){
  done("data",data)
})
l10n.get(function(err,resource){
  done("resource",resource)
})

//作者推荐了 EventProxy P79页，实现多对多事件侦听



function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    var res = false;
    if(pRoot1 != null && pRoot2 != null){
        if (pRoot1.val == pRoot2.val){
            res = HasSubtree2(pRoot1, pRoot2)
        }
        if(!res){
            res = HasSubtree(pRoot1.left, pRoot2)
        }
        if(!res){
            res = HasSubtree(pRoot1.right, pRoot2)
        }
    }
    return res;
}
function HasSubtree2 (node1,node2) {
    if(node1 == null) {
        return false;
    }
    if(node2 == null) {
        return true;
    }
    if(node1.val != node2.val){
        return false;
    }
    return HasSubtree2 (node1.left,node2.left) && HasSubtree2 (node1.right,node2.right)
}