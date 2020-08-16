// depth = 0 # 记录遍历到第几层
// while queue 非空:
//     depth++
//     n = queue 中的元素个数
//     循环 n 次:
//         node = queue.pop()
//         for node 的所有相邻结点 m:
//             if m 未访问过:
//                 queue.push(m)

// 一开始，我们找出所有腐烂的橘子，将它们放入队列，作为第 0 层的结点。
// 然后进行 BFS 遍历，每个结点的相邻结点可能是上、下、左、右四个方向的结点，注意判断结点位于网格边界的特殊情况。
// 由于可能存在无法被污染的橘子，我们需要记录新鲜橘子的数量。在 BFS 中，每遍历到一个橘子（污染了一个橘子），就将新鲜橘子的数量减一。如果 BFS 结束后这个数量仍未减为零，说明存在无法被污染的橘子。

const orangesRotting = (grid) => {
  const m = grid.length;
  const n = grid[0].length;

  const queue = [];
  let count = 0; //新鲜橘子总数
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        count++;
      }
      if (grid[i][j] == 2) {
        queue.push([i, j]);
      }
    }
  }

  let round = 0;
  while (queue.length && count > 0) {
    round++;
    let len = queue.length;
    for (let k = 0; k < len; k++) {
      let orange = queue.shift();
      let i = orange[0];
      let j = orange[1];
      if (i - 1 >= 0 && grid[i - 1][j] == 1) {
        grid[i - 1][j] = 2;
        count--;
        queue.push([i - 1, j]);
      }
      if (i + 1 < m && grid[i + 1][j] == 1) {
        grid[i + 1][j] = 2;
        count--;
        queue.push([i + 1, j]);
      }
      if (j - 1 >= 0 && grid[i][j - 1] == 1) {
        grid[i][j - 1] = 2;
        count--;
        queue.push([i, j - 1]);
      }
      if (j + 1 < n && grid[i][j + 1] == 1) {
        grid[i][j + 1] = 2;
        count--;
        queue.push([i, j + 1]);
      }
    }
  }
  if (count > 0) {
    return -1;
  } else {
    return round;
  }
};




// public int orangesRotting(int[][] grid) {
//   int M = grid.length;
//   int N = grid[0].length;
//   Queue<int[]> queue = new LinkedList<>();

//   int count = 0; // count 表示新鲜橘子的数量
//   for (int r = 0; r < M; r++) {
//       for (int c = 0; c < N; c++) {
//           if (grid[r][c] == 1) {
//               count++;
//           } else if (grid[r][c] == 2) {
//               queue.add(new int[]{r, c});
//           }
//       }
//   }

//   int round = 0; // round 表示腐烂的轮数，或者分钟数
//   while (count > 0 && !queue.isEmpty()) {
//       round++;
//       int n = queue.size();
//       for (int i = 0; i < n; i++) {
//           int[] orange = queue.poll();
//           int r = orange[0];
//           int c = orange[1];
//           if (r-1 >= 0 && grid[r-1][c] == 1) {
//               grid[r-1][c] = 2;
//               count--;
//               queue.add(new int[]{r-1, c});
//           }
//           if (r+1 < M && grid[r+1][c] == 1) {
//               grid[r+1][c] = 2;
//               count--;
//               queue.add(new int[]{r+1, c});
//           }
//           if (c-1 >= 0 && grid[r][c-1] == 1) {
//               grid[r][c-1] = 2;
//               count--;
//               queue.add(new int[]{r, c-1});
//           }
//           if (c+1 < N && grid[r][c+1] == 1) {
//               grid[r][c+1] = 2;
//               count--;
//               queue.add(new int[]{r, c+1});
//           }
//       }
//   }

//   if (count > 0) {
//       return -1;
//   } else {
//       return round;
//   }
// }

