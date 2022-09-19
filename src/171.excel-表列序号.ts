/*
 * @lc app=leetcode.cn id=171 lang=typescript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
  let sum:number = 0
  let multiple:number = 1
  for (let i:number = columnTitle.length - 1; i >= 0; --i) {
    const k = columnTitle[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1
    sum += k * multiple
    multiple *= 26
  }
  return sum
};
// @lc code=end

