import { describe, it, expect } from 'vitest'
import PostalCode from '../src/postal-code'

describe('Postal code testing', () => {
  it('Should get array of postal codes', () => {
    expect(new PostalCode(75).getAll()).toBeTypeOf('object')
  })

  it('Should have 100 postal codes', () => {
    expect(new PostalCode(75).getAll().length).toEqual(100)
  })

  it('Should have the code 7510', () => {
    expect(new PostalCode(75).getAll()).toContain(7510)
  })

  it('Should not have the code 7600', () => {
    expect(/7600/.test(new PostalCode(75).showAll())).toBeFalsy()
  })
})
