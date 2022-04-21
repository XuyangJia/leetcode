/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const hash:Map<number, number> = new Map
  for (let i:number = 0, len:number = nums.length; i < len; ++i) {
    if (hash.has(nums[i])) {
      return [hash.get(nums[i]), i]
    } else {
      hash.set(target - nums[i], i)
    }
  }
  return []
};
// @lc code=end

export { twoSum }
