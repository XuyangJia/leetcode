/*
 * @lc app=leetcode.cn id=168 lang=typescript
 *
 * [168] Excel表列名称
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
  const chars:string[] = []
  while (columnNumber > 0) {
    columnNumber--
    chars.push(String.fromCharCode(columnNumber % 26 + 'A'.charCodeAt(0)))
    columnNumber = Math.floor(columnNumber / 26)
  }
  return chars.reverse().join('')
};
// @lc code=end

