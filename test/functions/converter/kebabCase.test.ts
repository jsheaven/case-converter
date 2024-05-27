import { jest } from '@jest/globals'
import { fromKebabCase, toKebabCase } from '../../../dist/index.esm'

describe('fromKebabCase', () => {
  it('should split a kebab-case string into an array of words', () => {
    expect(fromKebabCase('hello-world')).toEqual(['hello', 'world'])
    expect(fromKebabCase('this-is-a-test')).toEqual(['this', 'is', 'a', 'test'])
  })

  it('should return an array with a single element if there are no hyphens', () => {
    expect(fromKebabCase('hello')).toEqual(['hello'])
    expect(fromKebabCase('world')).toEqual(['world'])
  })

  it('should handle strings with multiple hyphens correctly', () => {
    expect(fromKebabCase('hello--world')).toEqual(['hello', 'world'])
    expect(fromKebabCase('this---is---a---test')).toEqual(['this', 'is', 'a', 'test'])
  })

  it('should handle leading and trailing hyphens correctly', () => {
    expect(fromKebabCase('-hello-world-')).toEqual(['hello', 'world'])
    expect(fromKebabCase('--this-is-a-test--')).toEqual(['this', 'is', 'a', 'test'])
  })

  it('should return an empty array if the input is an empty string', () => {
    expect(fromKebabCase('')).toEqual([])
  })

  it('should handle strings with only hyphens correctly', () => {
    expect(fromKebabCase('---')).toEqual([])
    expect(fromKebabCase('-')).toEqual([])
  })
})

describe('toKebabCase', () => {
  it('should join an array of words with hyphens and convert to lowercase', () => {
    expect(toKebabCase(['hello', 'world'])).toBe('hello-world')
    expect(toKebabCase(['this', 'is', 'a', 'test'])).toBe('this-is-a-test')
  })

  it('should handle an empty array', () => {
    expect(toKebabCase([])).toBe('')
  })

  it('should handle an array with a single element', () => {
    expect(toKebabCase(['hello'])).toBe('hello')
    expect(toKebabCase(['world'])).toBe('world')
  })

  it('should handle words with uppercase letters', () => {
    expect(toKebabCase(['Hello', 'World'])).toBe('hello-world')
    expect(toKebabCase(['This', 'Is', 'A', 'Test'])).toBe('this-is-a-test')
  })

  it('should handle words with numbers', () => {
    expect(toKebabCase(['hello', 'world', '123'])).toBe('hello-world-123')
    expect(toKebabCase(['this', 'is', '2021'])).toBe('this-is-2021')
  })

  it('should handle mixed words with uppercase, lowercase, and numbers', () => {
    expect(toKebabCase(['Hello', 'World', '123'])).toBe('hello-world-123')
    expect(toKebabCase(['this', 'IS', '2021', 'Test'])).toBe('this-is-2021-test')
  })
})
