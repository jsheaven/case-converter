import { jest } from '@jest/globals'
import { fromPascalCase, toPascalCase } from '../../../dist/index.esm'

describe('fromPascalCase', () => {
  it('Snake case should be ignored', () => {
    expect(fromPascalCase('HALLO_WORLD')).toEqual(['HALLO_WORLD'])
  })

  it('Single word should remain unchanged', () => {
    expect(fromPascalCase('Hello')).toEqual(['Hello'])
  })

  it('CamelCase should be split correctly', () => {
    expect(fromPascalCase('helloWorld')).toEqual(['hello', 'World'])
  })

  it('Multiple words in camelCase should be split correctly', () => {
    expect(fromPascalCase('thisIsATest')).toEqual(['this', 'Is', 'ATest'])
  })

  it('Mixed case with numbers should be split correctly', () => {
    expect(fromPascalCase('myVar123Name')).toEqual(['my', 'Var123', 'Name'])
  })

  it('Words with consecutive uppercase letters should be split correctly', () => {
    expect(fromPascalCase('myHTTPServer')).toEqual(['my', 'HTTPServer'])
  })

  it('Single letter words in camelCase should be split correctly', () => {
    expect(fromPascalCase('aB')).toEqual(['a', 'B'])
  })

  it('Lowercase string should remain unchanged', () => {
    expect(fromPascalCase('lowercase')).toEqual(['lowercase'])
  })

  it('Uppercase string should remain unchanged', () => {
    expect(fromPascalCase('UPPERCASE')).toEqual(['UPPERCASE'])
  })

  it('CamelCase with leading capital should be split correctly', () => {
    expect(fromPascalCase('CamelCase')).toEqual(['Camel', 'Case'])
  })

  it('Empty string should return empty array', () => {
    expect(fromPascalCase('')).toEqual([])
  })

  it('String with spaces should be split correctly', () => {
    expect(fromPascalCase('hello World')).toEqual(['hello ', 'World'])
  })

  it('String with special characters should be split correctly', () => {
    expect(fromPascalCase('hello$World')).toEqual(['hello$', 'World'])
  })
})

describe('toPascalCase', () => {
  it('should capitalize the first character of each word and join them', () => {
    expect(toPascalCase(['hello', 'world'])).toBe('HelloWorld')
    expect(toPascalCase(['this', 'is', 'a', 'test'])).toBe('ThisIsATest')
  })

  it('should handle an empty array', () => {
    expect(toPascalCase([])).toBe('')
  })

  it('should handle an array with a single element', () => {
    expect(toPascalCase(['hello'])).toBe('Hello')
    expect(toPascalCase(['world'])).toBe('World')
  })

  it('should handle words with uppercase letters', () => {
    expect(toPascalCase(['Hello', 'World'])).toBe('HelloWorld')
    expect(toPascalCase(['This', 'Is', 'A', 'Test'])).toBe('ThisIsATest')
  })

  it('should handle words with numbers', () => {
    expect(toPascalCase(['hello', 'world', '123'])).toBe('HelloWorld123')
    expect(toPascalCase(['this', 'is', '2021'])).toBe('ThisIs2021')
  })

  it('should handle mixed words with uppercase, lowercase, and numbers', () => {
    expect(toPascalCase(['Hello', 'World', '123'])).toBe('HelloWorld123')
    expect(toPascalCase(['this', 'IS', '2021', 'Test'])).toBe('ThisIs2021Test')
  })
})
