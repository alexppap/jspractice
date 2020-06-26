function movingCount(threshold, rows, cols){
    let visited = [];
    for(let i=0;i<rows;i++){
        visited.push([]);
        for(let j=0;j<cols;j++){
            visited[i][j] = false
        }
    }
    return dfs(threshold, rows, cols,0,0,visited)
}

function dfs(threshold, rows, cols,row,col,visited){
    if(row<0 || col<0 || row === rows || col === cols || visited[row][col]=== true){
        return 0;
    }
    let sum = 0;
    let temp = row + '' + col;
    for(let i=0;i<temp.length;i++){
        sum += Number(temp[i]);
    }
    if(sum > threshold){
        return 0;
    }
    visited[row][col] = true;

    return 1 + dfs(threshold, rows, cols,row-1,col,visited)
             + dfs(threshold, rows, cols,row+1,col,visited)
             + dfs(threshold, rows, cols,row,col-1,visited)
             + dfs(threshold, rows, cols,row,col+1,visited)
}