/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function makeList(arr:Array<number>):ListNode | null {
  const head:ListNode = new ListNode()
  let tmp:ListNode = head
  for (const num of arr) {
    tmp.next = new ListNode(num)
    tmp = tmp.next
  }
  return head.next
}

// @lc code=start

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const head:ListNode = new ListNode
  let carry = 0
  let tmp:ListNode = head
  let tmp1:ListNode = l1
  let tmp2:ListNode = l2
  while (tmp1 || tmp2) {
    const val1 = tmp1?.val || 0
    const val2 = tmp2?.val || 0
    const sum = val1 + val2 + carry
    carry = Math.floor(sum / 10)
    tmp.next = new ListNode(sum % 10)
    tmp = tmp.next
    tmp1 = tmp1?.next
    tmp2 = tmp2?.next
  }
  if (carry) {
    tmp.next = new ListNode(carry)
  }
  return head.next
}
// @lc code=end

export {
  ListNode,
  makeList,
  addTwoNumbers
}
