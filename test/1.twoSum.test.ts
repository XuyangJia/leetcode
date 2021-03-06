import { describe, expect, it } from 'vitest'
import { twoSum } from '../src/1.两数之和'

describe('两数之和', () => {
    it('twoSum', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
        expect(twoSum([3, 3], 6)).toEqual([0, 1])
    })
})
