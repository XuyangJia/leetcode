/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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
function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return []
  return [
    inorderTraversal(root.left),
    root.val,
    inorderTraversal(root.right)
  ].flat()
};
// @lc code=end

