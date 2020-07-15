//121


//买卖一次
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var min = prices[0];
  var maxprofit = 0;
  for(let i=0;i<prices.length;i++){
      if(prices[i]<min){
          min = prices[i];
      }
       if(prices[i] - min > maxprofit){
          maxprofit = prices[i] - min;
      }
  }
  return maxprofit;
};

// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var max = 0;
  for(let i=0;i<prices.length;i++){
      if(prices[i]>prices[i-1]){
          max += prices[i] - prices[i-1];
      }
  }
  return max;
}; 

//冷冻期一天

const maxProfit = (prices) => {
    const n = prices.length;   // n天
    if (n == 0) return 0
    let hold = new Array(n);   // 第i天持有股票的最大收益
    let unhold = new Array(n); // 第i天不持有股票的最大收益
    hold[0] = -prices[0];      // 第0天 买了股票的收益
    unhold[0] = 0
    for (let i = 1; i < n; i++) {
      if (i == 1) {            // base case
        hold[i] = Math.max(hold[i - 1], -prices[1]);
      } else {
        hold[i] = Math.max(hold[i - 1], unhold[i - 2] - prices[i]);
      }
      unhold[i] = Math.max(unhold[i - 1], hold[i - 1] + prices[i]); 
    }
    return unhold[n - 1];
  };
  