var maxDepth = function(root) {
  if(root === null){
      return 0;
  }
  let num = 0;
  if(root.children){
      root.children.forEach(item=>{   // 遍历有几个节点
    let max = maxDepth(item)      // 递归调用
    num = Math.max(max, num)      // 对比当前和之前得到的 深度, 保留大的
  })
  }
  return num+1
};