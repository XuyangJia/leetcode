import { describe, expect, it } from 'vitest'
import { addTwoNumbers, makeList } from '../src/2.两数相加'

describe('两数相加', () => {
  it('addTwoNumbers', () => {
    expect(addTwoNumbers(makeList([0]), makeList([0]))).toEqual(makeList([0]))
    expect(addTwoNumbers(makeList([2,4,3]), makeList([5,6,4]))).toEqual(makeList([7,0,8]))
    expect(addTwoNumbers(makeList([9,9,9,9,9,9,9]), makeList([9,9,9,9]))).toEqual(makeList([8,9,9,9,0,0,0,1]))
  })
})