import { describe, expect, it } from 'vitest'
import { isIsomorphic } from '../src/205.同构字符串'

describe('同构字符串', () => {
    it('isIsomorphic', () => {
        expect(isIsomorphic('egg', 'add')).toEqual(true)
        expect(isIsomorphic('badc', 'baba')).toEqual(false)
    })
})