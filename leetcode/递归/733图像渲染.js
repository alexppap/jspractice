//dfs
const floodFill = function(image, sr, sc, newColor) {
  let a = image[sr][sc]
  if(a!=newColor){
      changes(image,sr,sc,newColor,a);    
  }
  return image;
};

function changes(image,i,j,newColor,a){
  if(i<0 || i==image.length || j<0 || j==image[0].length || a!=image[i][j] ){
      return;
  }
  image[i][j] = newColor;
  changes(image,i-1,j,newColor,a);
  changes(image,i+1,j,newColor,a);
  changes(image,i,j+1,newColor,a);
  changes(image,i,j-1,newColor,a);
}


//bfs

const floodFill = (image, sr, sc, newColor) => {
  const m = image.length;
  const n = image[0].length;
  const oldColor = image[sr][sc];

  if (oldColor == newColor) return image;

  const queue = [[sr, sc]];

  while (queue.length) {
    const [i, j] = queue.shift();
    image[i][j] = newColor;

    if (i - 1 >= 0 && image[i - 1][j] == oldColor) queue.push([i - 1, j]);
    if (i + 1 < m && image[i + 1][j] == oldColor) queue.push([i + 1, j]);
    if (j - 1 >= 0 && image[i][j - 1] == oldColor) queue.push([i, j - 1]);
    if (j + 1 < n && image[i][j + 1] == oldColor) queue.push([i, j + 1]);
  }

  return image;
};