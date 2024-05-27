import { jest } from '@jest/globals'
import { fromCamelCase, toCamelCase } from '../../../dist/index.esm'

describe('fromCamelCase (equivalent to fromPascalCase)', () => {
  it('should convert a string in camelCase format to an array of words', () => {
    expect(fromCamelCase('helloWorld')).toEqual(['hello', 'World'])
    expect(fromCamelCase('thisIsA123Test')).toEqual(['this', 'Is', 'A123', 'Test'])
  })

  it('should handle an empty string', () => {
    expect(fromCamelCase('')).toEqual([])
  })

  it('should handle a string with only one word', () => {
    expect(fromCamelCase('hello')).toEqual(['hello'])
    expect(fromCamelCase('world')).toEqual(['world'])
  })

  it('should handle a string with uppercase letters', () => {
    expect(fromCamelCase('HelloWorld')).toEqual(['Hello', 'World'])
    expect(fromCamelCase('ThisIsA123Test')).toEqual(['This', 'Is', 'A123', 'Test'])
  })

  it('should handle a string with numbers', () => {
    expect(fromCamelCase('helloWorld123')).toEqual(['hello', 'World123'])
    expect(fromCamelCase('thisIsA2021Test')).toEqual(['this', 'Is', 'A2021', 'Test'])
  })
})

describe('toCamelCase', () => {
  it('should convert an array of words to camelCase format', () => {
    expect(toCamelCase(['hello', 'world'])).toBe('helloWorld')
    expect(toCamelCase(['this', 'is', 'a', 'test'])).toBe('thisIsATest')
  })

  it('should handle an empty array', () => {
    expect(toCamelCase([])).toBe('')
  })

  it('should handle an array with a single element', () => {
    expect(toCamelCase(['hello'])).toBe('hello')
    expect(toCamelCase(['world'])).toBe('world')
  })

  it('should handle words with uppercase letters', () => {
    expect(toCamelCase(['Hello', 'World'])).toBe('helloWorld')
    expect(toCamelCase(['This', 'Is', 'A', 'Test'])).toBe('thisIsATest')
  })

  it('should handle words with numbers', () => {
    expect(toCamelCase(['hello', 'world', '123'])).toBe('helloWorld123')
    expect(toCamelCase(['this', 'is', '2021'])).toBe('thisIs2021')
  })

  it('should handle mixed words with uppercase, lowercase, and numbers', () => {
    expect(toCamelCase(['Hello', 'World', '123'])).toBe('helloWorld123')
    expect(toCamelCase(['this', 'IS', '2021', 'Test'])).toBe('thisIs2021Test')
  })
})
