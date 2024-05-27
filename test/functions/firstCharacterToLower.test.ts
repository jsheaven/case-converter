import { jest } from '@jest/globals'
import { firstCharacterToLower } from '../../dist/index.esm'

describe('firstCharacterToLower', () => {
  it('should convert the first character of a string to lowercase', () => {
    expect(firstCharacterToLower('Hello')).toBe('hello')
    expect(firstCharacterToLower('WORLD')).toBe('wORLD')
  })

  it('should return an empty string if the input is an empty string', () => {
    expect(firstCharacterToLower('')).toBe('')
  })

  it('should return the same string if the first character is already lowercase', () => {
    expect(firstCharacterToLower('hello')).toBe('hello')
    expect(firstCharacterToLower('world')).toBe('world')
  })

  it('should handle single character strings', () => {
    expect(firstCharacterToLower('H')).toBe('h')
    expect(firstCharacterToLower('h')).toBe('h')
  })

  it('should handle strings with special characters', () => {
    expect(firstCharacterToLower('!Hello')).toBe('!Hello')
    expect(firstCharacterToLower('#world')).toBe('#world')
  })

  it('should handle strings with numbers', () => {
    expect(firstCharacterToLower('123')).toBe('123')
    expect(firstCharacterToLower('1world')).toBe('1world')
  })

  it('should return the same string if it contains only one character which is already lowercase', () => {
    expect(firstCharacterToLower('a')).toBe('a')
  })

  it('should convert only the first character to lowercase, leaving the rest unchanged', () => {
    expect(firstCharacterToLower('JavaScript')).toBe('javaScript')
  })
})
