/*
 * @lc app=leetcode.cn id=191 lang=typescript
 *
 * [191] 位1的个数
 */

// @lc code=start
function hammingWeight(n: number): number {
  let res = 0
  for (let i = 0; i < 32; i++) {
    res += n & 1
    n >>= 1
  }
  return res
};
// @lc code=end

