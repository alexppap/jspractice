var tree = {
  name: 'root1',
  id:'v1',
  children1:{
    id:'node1',
    id: 'node2'
  },
  children2:{
    id:'node3',
    id: 'node4'
  }
}
let res = [];
function preorder(){
  var arr = [];
  function dlr(obj){
    if(obj){
      arr.push(obj.id);
      dlr(obj.children1);
      dlr(obj.children2);
    }
  }
  dlr(tree);
  console.log(arr)
}

preorder(tree)

