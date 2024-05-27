import { jest } from '@jest/globals'
import { isAlphaCase } from '../../dist/index.esm'

describe('isAlphaCase', () => {
  it('Empty string should return false', () => {
    expect(isAlphaCase('')).toBe(false)
  })

  it('String with only lowercase letters should return true', () => {
    expect(isAlphaCase('hello')).toBe(true)
  })

  it('String with only uppercase letters should return true', () => {
    expect(isAlphaCase('WORLD')).toBe(true)
  })

  it('String with both lowercase and uppercase letters should return true', () => {
    expect(isAlphaCase('HelloWorld')).toBe(true)
  })

  it('String with numbers should return false', () => {
    expect(isAlphaCase('hello123')).toBe(false)
  })

  it('String with special characters should return false', () => {
    expect(isAlphaCase('hello$world')).toBe(false)
  })

  it('String with spaces should return false', () => {
    expect(isAlphaCase('hello world')).toBe(false)
  })

  it('String with non-alphanumeric characters should return false', () => {
    expect(isAlphaCase('@HelloWorld')).toBe(false)
  })
})
