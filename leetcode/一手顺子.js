// 爱丽丝有一手（hand）由整数数组给定的牌。 

// 现在她想把牌重新排列成组，使得每个组的大小都是 W，且由 W 张连续的牌组成。

// 如果她可以完成分组就返回 true，否则返回 false。

// 输入：hand = [1,2,3,6,2,3,4,7,8], W = 3
// 输出：true
// 解释：爱丽丝的手牌可以被重新排列为 [1,2,3]，[2,3,4]，[6,7,8]。


/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function(hand, W) {
  var map = {}
  for (var i = 0; i < hand.length; i++) {
    if (!map[hand[i]]) map[hand[i]] = 0
    map[hand[i]]++
  }
  hand.sort((a, b) => a - b)
  for (var i = 0; i < hand.length; i++) {
    // 访问过的不再访问了
    if (!map[hand[i]]) continue

    var count = W - 1
    var sum = 1
    
    map[hand[i]]--
    while(count > 0) {
      if (!map[hand[i] + sum]) {
        return false
      }
      // 标记我已经取走了
      map[hand[i] + sum]--
      sum++
      count--
    }
  }
  return true
};
