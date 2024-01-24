import { describe, it, expect } from 'vitest'
import MyDate from '../src/my-date'

describe('Moment of journey testing', () => {
  const dates = [
    ['2023-12-11 08:00:00', 'Matin'],
    ['2023-12-11 12:00:00', 'Après-midi'],
    ['2023-12-11 18:00:00', 'Soirée'],
    ['2023-12-11 00:00:00', 'Nuit']
  ]

  it.each(dates)('Should get moment of journey', (dt, expected) => {
    expect(
      (new MyDate(dt)).getMoment()
    ).toEqual(expected)
  })
})
