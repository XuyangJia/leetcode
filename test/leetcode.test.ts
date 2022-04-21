import { describe, expect, it } from 'vitest'
import { twoSum } from '../src/1.两数之和'
import { addTwoNumbers, makeList } from '../src/2.两数相加'
import { lengthOfLongestSubstring } from '../src/3.无重复字符的最长子串'

describe('leetcode', () => {
  it('两数之和', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0, 1])
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    expect(twoSum([3, 3], 6)).toEqual([0,1])
  })
  
  it('两数相加', () => {
    expect(addTwoNumbers(makeList([0]), makeList([0]))).toEqual(makeList([0]))
    expect(addTwoNumbers(makeList([2,4,3]), makeList([5,6,4]))).toEqual(makeList([7,0,8]))
    expect(addTwoNumbers(makeList([9,9,9,9,9,9,9]), makeList([9,9,9,9]))).toEqual(makeList([8,9,9,9,0,0,0,1]))
  })
  
  it('无重复字符的最长子串', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).equal(3)
    expect(lengthOfLongestSubstring('bbbbb')).equal(1)
    expect(lengthOfLongestSubstring(' ')).equal(1)
    expect(lengthOfLongestSubstring('pwwkew')).equal(3)
    expect(lengthOfLongestSubstring('dvdf')).equal(3)
    expect(lengthOfLongestSubstring('aabaab!bb')).equal(3)
  })
})