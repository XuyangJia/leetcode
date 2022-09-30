/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  function getNext(num: number): number {
    let sum = 0
    while(num) {
      sum += (num % 10) ** 2
      num = (num / 10) >> 0
    }
    return sum
  }

  // // 方法一
  // const seen:Set<number> = new Set()
  // do {
  //   if (n === 1) return true
  //   seen.add(n)
  //   n = getNext(n)
  // } while (!seen.has(n));
  // return false

  // 方法二(快慢指针)
  let slow_runner = n, fast_runner = getNext(n)
  while (fast_runner !== 1 && slow_runner !== fast_runner) {
    slow_runner = getNext(slow_runner)
    fast_runner = getNext(getNext(fast_runner))
  }
  return fast_runner === 1
};
// @lc code=end

