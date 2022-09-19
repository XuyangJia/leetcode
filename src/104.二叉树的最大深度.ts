/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
 */

//Definition for a binary tree node.
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
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0
  const maxDepth_l = maxDepth(root.left)
  const maxDepth_r = maxDepth(root.right)
  return (maxDepth_l > maxDepth_r ? maxDepth_l : maxDepth_r) + 1
};
// @lc code=end

