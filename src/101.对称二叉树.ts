/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
 */
// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

// @lc code=start
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true
  // 递归
  // const compare = (l:TreeNode | null, r:TreeNode |null) => {
  //   if (!l || !r) return l === r
  //   return l.val === r.val && compare(l.left, r.right) && compare(l.right, r.left)
  // }
  // return compare(root.left, root.right)
  
  // 迭代
  const queue:(TreeNode | null)[] = []
  queue.push(root.left)
  queue.push(root.right)
  while(queue.length) {
    const u = queue.shift()
    const v = queue.shift()
    if (!u && !v) continue
    if (!u || !v || u.val !== v.val) return false
    queue.push(u.left)
    queue.push(v.right)
    queue.push(v.left)
    queue.push(u.right)
  }
  return true
};
// @lc code=end

