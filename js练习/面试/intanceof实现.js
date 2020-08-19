function newintanceof(leftValue,rightValue){
  let rightProto = rightValue.prototype;
  let leftProto = leftValue.__proto__;
  while(true){
    if(leftProto === null){
      return false;
    }
    if(leftProto === rightProto){
      return true;
    }
    leftProto = leftProto.__proto__;
  }
}