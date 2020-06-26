//建立二维hash表,通过的格子都为 false;

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
      return 0; //边界确定，已通过的设为true的返回0
  }
  let sum = 0;
  let temp = row + '' + col; //字符串变为数字
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
           + dfs(threshold, rows, cols,row,col+1,visited) //上下左右四个方向
}