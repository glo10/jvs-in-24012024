import { describe, it, expect } from 'vitest'
import User from '../src/User'

describe('Get generation and email format testing', () => {
  const ageProvider = [
    [10, 'Enfant'],
    [11, 'Adolescent'],
    [18, 'Majeur'],
    [50, 'Senior']
  ]
  const emailsProvider = [
    [true, 'contact@tshimini.fr'],
    [false, '@tshimini.fr'],
    [false, 'contacttshimini.fr'],
    [false, 'contact@tshimini.'],
    [false, 'contact@tshiminifr']
  ]

  it.each(ageProvider)('Should get generation %s for %s', (age, generation) => {
    expect(
      (new User(age)).getGeneration()
    ).toBe(generation)
  })

  it.each(emailsProvider)('Should check email', (expected, email) => {
    expect(
      (new User()).checkEmail(email)
    ).toBe(expected)
  })
})
