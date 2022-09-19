/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  // 摩尔投票法
  let cand_num:number = nums[0]
  let count:number = 1
  for (let i:number = 1, len:number = nums.length; i < len; ++i) {
    count += nums[i] === cand_num ? 1 : -1
    if (count === 0) {
      cand_num = nums[i]
      count = 1
    }
  }
  return cand_num
};
// @lc code=end

