import { describe, expect, it } from 'vitest'
import { lengthOfLongestSubstring } from '../src/3.无重复字符的最长子串'

describe('无重复字符的最长子串', () => {
    it('lengthOfLongestSubstring', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).equal(3)
        expect(lengthOfLongestSubstring('bbbbb')).equal(1)
        expect(lengthOfLongestSubstring(' ')).equal(1)
        expect(lengthOfLongestSubstring('pwwkew')).equal(3)
        expect(lengthOfLongestSubstring('dvdf')).equal(3)
        expect(lengthOfLongestSubstring('aabaab!bb')).equal(3)
    })
})