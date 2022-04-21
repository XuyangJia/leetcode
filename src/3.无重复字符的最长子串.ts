/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const arr = new Array
  let count = 0
  for (let i = 0, len = s.length; i < len; ++i) {
    const char = s[i]
    const index = arr.indexOf(char)
    if (index !== -1) {
      count = Math.max(count, arr.length)
      arr.splice(0, index + 1)
    }
    arr.push(char)
  }
  return Math.max(count, arr.length)
};
// @lc code=end
export { lengthOfLongestSubstring }
