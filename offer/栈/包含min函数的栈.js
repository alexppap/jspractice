var stack = [];

function push(node)
{
    stack.push(node);
}
function pop()
{
    if(stack.length!==0){
        stack.pop();
    }
    
}
function top()
{
    if(stack.length!==0){
        return stack[0];
    }
}
function min()
{
    return Math.min.apply(null,stack);
}