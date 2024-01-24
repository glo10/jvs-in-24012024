import { describe, it, expect } from 'vitest'
import ArraySearch from '../src/array-search'

describe('Array functions testing', () => {
  it('Should count population', () => {
    // Arrange
    const arraySearch = new ArraySearch()
    // Act
    const results = arraySearch.countPopulation([350, 100, 250, 200, 100])
    // Assert
    expect(results).toEqual({ population: 1000, countries: 5 })
  })

  it('Should slice numbers and get numbers over 90', () => {
    const numbers = (new ArraySearch()).slice(90, 10, 40, 150)
    const overs = numbers[1]
    expect(Math.max(...overs)).toBeGreaterThanOrEqual(90)
  })

  it('Should slice numbers and get numbers under 25', () => {
    const numbers = (new ArraySearch()).slice(25, 10, 10, 40)
    const unders = numbers[0]
    expect(Math.max(...unders)).toBeLessThanOrEqual(25)
  })

  it('Should generate numbers under 9', () => {
    const numbers = (new ArraySearch()).generateNumbers(10, 1, 9)
    expect(Math.max(...numbers)).toBeLessThanOrEqual(9)
  })

  it('Should generate numbers over 999', () => {
    const numbers = (new ArraySearch()).generateNumbers(10, 999, 10000)
    expect(Math.max(...numbers)).toBeGreaterThanOrEqual(999)
  })

  it('Should generate 15 numbers', () => {
    expect((new ArraySearch()).generateNumbers(15).length).toEqual(15)
  })
})
