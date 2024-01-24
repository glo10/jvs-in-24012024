import { describe, it, expect } from 'vitest'
import MyMath from '../src/my-math'

describe('MyMath class testing', () => {
  const minProvider = [
    [3, [20, 14, 9, 3, 4, 3, 7, 19]],
    [-10, [20, 114, -10, 30, 410, 3, 0, 1]],
    [-5000, [2140, -1114, -1550, 3100, -410, -5000, 0, 1000]]
  ]

  const maxProvider = [
    [20, [20, 14, 9, 3, 4, 3, 7, 19]],
    [410, [20, 114, -10, 30, 410, 3, 0, 1]],
    [3100, [2140, -1114, -1550, 3100, -410, -5000, 0, 1000]],
    [-999, [-2140, -1114, -1550, -3100, -999, -5000]]
  ]

  it.each(minProvider)('test find min value', (expected, values) => {
    // Assert
    expect(
      (new MyMath()).min(values)
    ).toBe(expected)
  })

  it.each(maxProvider)('test find max value', (expected, values) => {
    // Assert
    expect(
      (new MyMath()).max(values)
    ).toBe(expected)
  })

  it('Should permute 2 numbers', () => {
    // Assert
    expect(
      (new MyMath()).permutation(3, 5)
    ).toEqual([5, 3])
  })

  it('Should test Fibonacci', () => {
    // Assert
    expect(
      (new MyMath()).fibonacci()
    ).toStrictEqual(
      [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
    )
  })

  it('Should show table of 5', () => {
    const res = (new MyMath()).multiply(5)
    expect(res).toContain('5*1=5;5*2=10;5*3=15')
  })

  it('Should show table of 10', () => {
    const res = (new MyMath()).multiply(10)
    expect(res).toContain('10*10=100')
  })

  it('Should test VAT', () => {
    // Assert
    expect(
      (new MyMath()).calcTTC(100, 20)
    ).toBe(120)
  })

  it('Should test tree', () => {
    expect(
      (new MyMath()).tree(5)
    ).toBe('122333444455555')
  })

  it('Should test average of 2 numbers', () => {
    expect(
      (new MyMath()).calcAvg(5, 10)
    ).toEqual(7.5)
  })

  it('Should test average of 2 numbers', () => {
    expect(
      (new MyMath()).calcAvg(5, 5, 20)
    ).toEqual(10)
  })

  it('Should test average of 10 numbers', () => {
    expect(
      (new MyMath()).calcAvg(5, 5, 20, 12, 4, 8, 15, 70, 9, 10)
    ).toEqual(15.8)
  })

  it('Should test average of array numbers', () => {
    expect(
      (new MyMath()).calcAvgArray([24, 12, 0])
    ).toEqual(12)
  })

  it('Should test a division', () => {
    expect(
      (new MyMath()).divide(100, 20)
    ).toBe(5)
  })

  it('Should test a division', () => {
    expect(() => {
      (new MyMath()).divide(100, 0)
    }).toThrow(Error)
  })
})
