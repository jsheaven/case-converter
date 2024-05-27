import { jest } from '@jest/globals'
import { firstCharacterToUpper } from '../../dist/index.esm'

describe('firstCharacterToUpper', () => {
  it('should convert the first character of a string to uppercase', () => {
    expect(firstCharacterToUpper('hello')).toBe('Hello')
    expect(firstCharacterToUpper('world')).toBe('World')
  })

  it('should return an empty string if the input is an empty string', () => {
    expect(firstCharacterToUpper('')).toBe('')
  })

  it('should return the same string if the first character is already uppercase', () => {
    expect(firstCharacterToUpper('Hello')).toBe('Hello')
    expect(firstCharacterToUpper('World')).toBe('World')
  })

  it('should handle single character strings', () => {
    expect(firstCharacterToUpper('h')).toBe('H')
    expect(firstCharacterToUpper('H')).toBe('H')
  })

  it('should handle strings with special characters', () => {
    expect(firstCharacterToUpper('!hello')).toBe('!hello')
    expect(firstCharacterToUpper('#world')).toBe('#world')
  })

  it('should handle strings with numbers', () => {
    expect(firstCharacterToUpper('123')).toBe('123')
    expect(firstCharacterToUpper('1world')).toBe('1world')
  })

  it('should return the same string if it contains only one character which is already uppercase', () => {
    expect(firstCharacterToUpper('A')).toBe('A')
  })

  it('should convert only the first character to uppercase, leaving the rest unchanged', () => {
    expect(firstCharacterToUpper('javaScript')).toBe('JavaScript')
  })
})
