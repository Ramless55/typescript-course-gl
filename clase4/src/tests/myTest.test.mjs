import assert from 'node:assert/strict'
import { after, before, describe, it } from 'node:test'
import { sum } from '../utils/sum.mjs'

describe.only('Sum function', () => {
  it('should return a  number', () => {
    const result = sum(2, 5)
    assert.equal(typeof result, 'number')
  })

  it('should return the correct sum', () => {
    assert.equal(sum(3, 8), 11)
    assert.equal(sum(2, 5), 7)
    assert.equal(sum(-5, 4), -1)
  })

  it('should return an error with invalid params', () => {
    assert.throws(sum('3', 4))
  })
})

// describe('POST /user', () => {
//   before(() => {
//     console.log('esto es un before')
//   })
//   after(() => {
//     console.log('Esto es un after')
//   })

//   it('should return an user', () => {
//     assert.ok('El test paso')
//   })
//   it('should return an user', () => {
//     assert.ok('BOOM')
//   })
// })
