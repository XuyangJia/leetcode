/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  const len:number = s.length
  const hash_s:Map<string, string> = new Map
  const hash_t:Map<string, string> = new Map
  for (let i = 0; i < len; i++) {
    if (!hash_s.get(s[i]) && !hash_t.get(t[i])) {
      hash_s.set(s[i], t[i])
      hash_t.set(t[i], s[i])
    }
    if (hash_s.get(s[i]) !== t[i] || hash_t.get(t[i]) !== s[i]) {
      return false
    }
  }
  return true
};
// @lc code=end

export { isIsomorphic }
