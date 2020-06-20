function hasPath(matrix, rows, cols, path)
{
    // write code hereu
    if(!matrix||!path||rows<=0||cols<=0||rows*cols<path.length||path.length==0){
        return false;
    }
    let copy=matrix.split('');
    for(var i=0;i<rows;i++){
        for(var j=0;j<cols;j++){
            if(dfs(matrix,i,j,rows,cols,copy,path,0)){
                return true;
            }
        }
    }
}
function dfs(maxtrix,i,j,rows,cols,copy,path,k){
    //边界检查
    var index=i*cols+j;
    if(i<0||j<0||i>=rows||j>=cols||path[k]!=maxtrix[index]||copy[index]==true){
        return false;
    }
    if(k==path.length-1)
        return true;
    copy[index]=true;
    if(dfs(maxtrix,i-1,j,rows,cols,copy,path,k+1)||
       dfs(maxtrix,i+1,j,rows,cols,copy,path,k+1)||
       dfs(maxtrix,i,j-1,rows,cols,copy,path,k+1)||
       dfs(maxtrix,i,j+1,rows,cols,copy,path,k+1)){
        return true;
    }
    copy[index]=false;
    return false;
}