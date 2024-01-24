import { it, describe, expect } from 'vitest'
import Str from '../src/str'

describe('string functions testing', () => {
  const words = [
    [
      'hello',
      ['hello', 'hello world', 'mama mia']
    ],
    [
      'a',
      ['abcdef', 'a', 'gf']
    ],
    [
      'f',
      ['abcdef', 'af', 'f']
    ],
    [
      ['a', 'b'],
      ['abcdef', 'a', 'b', 'gf']
    ]
  ]

  it.each(words)('Should test minimum word (exercice 14)', (min, words) => {
    expect(min).toEqual((new Str()).min(words))
  })
})
