import { describe, it, expect } from 'vitest'
import PostalCode from '../src/postal-code'

describe('Postal code testing', () => {
  it('Should get array of postal codes', () => {
    expect(new PostalCode(75).getAll()).toBeTypeOf('object')
  })

  it('Should have 100 postal codes', () => {
    expect(new PostalCode(75).getAll().length).toEqual(1000)
  })

  it('Should have the code 75010', () => {
    expect(new PostalCode(75).getAll()).toContain(75010)
  })

  it('Should not have the code 76000', () => {
    expect(/76000/.test(new PostalCode(75).showAll())).toBeFalsy()
  })
})
