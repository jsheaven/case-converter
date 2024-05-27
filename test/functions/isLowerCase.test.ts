import { jest } from '@jest/globals'
import { isLowerCase } from '../../dist/index.esm'

describe('isLowerCase', () => {
  it('Empty string should return true', () => {
    expect(isLowerCase('')).toBe(true)
  })

  it('String with only lowercase letters should return true', () => {
    expect(isLowerCase('hello')).toBe(true)
  })

  it('String with only uppercase letters should return false', () => {
    expect(isLowerCase('WORLD')).toBe(false)
  })

  it('String with both lowercase and uppercase letters should return false', () => {
    expect(isLowerCase('HelloWorld')).toBe(false)
  })

  it('String with numbers should return true, numbers are ignored', () => {
    expect(isLowerCase('hello123')).toBe(true)
  })

  it('String with special characters should return true, special characters are ignored', () => {
    expect(isLowerCase('hello$world')).toBe(true)
  })

  it('String with spaces should return true, spaces are ignored', () => {
    expect(isLowerCase('hello world')).toBe(true)
  })
})
