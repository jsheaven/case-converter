import { jest } from '@jest/globals'
import { fromSnakeCase, toSnakeCase } from '../../../dist/index.esm'

describe('fromSnakeCase', () => {
  it('should split a snake_case string into an array of words', () => {
    expect(fromSnakeCase('hello_world')).toEqual(['hello', 'world'])
    expect(fromSnakeCase('this_is_a_test')).toEqual(['this', 'is', 'a', 'test'])
  })

  it('should return an array with a single element if there are no underscores', () => {
    expect(fromSnakeCase('hello')).toEqual(['hello'])
    expect(fromSnakeCase('world')).toEqual(['world'])
  })

  it('should handle strings with multiple underscores correctly, removing empty values', () => {
    expect(fromSnakeCase('hello__world')).toEqual(['hello', 'world'])
    expect(fromSnakeCase('this___is___a___test')).toEqual(['this', 'is', 'a', 'test'])
  })

  it('should handle leading and trailing underscores correctly', () => {
    expect(fromSnakeCase('_hello_world_')).toEqual(['hello', 'world'])
    expect(fromSnakeCase('__this_is_a_test__')).toEqual(['this', 'is', 'a', 'test'])
  })

  it('should return an empty array if the input is an empty string', () => {
    expect(fromSnakeCase('')).toEqual([])
  })

  it('should handle strings with only underscores correctly', () => {
    expect(fromSnakeCase('___')).toEqual([])
    expect(fromSnakeCase('_')).toEqual([])
  })

  it('should handle strings with uppercase letters correctly', () => {
    expect(fromSnakeCase('Hello_World')).toEqual(['Hello', 'World'])
    expect(fromSnakeCase('This_Is_A_Test')).toEqual(['This', 'Is', 'A', 'Test'])
  })

  it('should handle strings with numbers correctly', () => {
    expect(fromSnakeCase('hello_world_123')).toEqual(['hello', 'world', '123'])
    expect(fromSnakeCase('this_is_2021')).toEqual(['this', 'is', '2021'])
  })

  it('should handle mixed strings with uppercase, lowercase, and numbers correctly', () => {
    expect(fromSnakeCase('Hello_World_123')).toEqual(['Hello', 'World', '123'])
    expect(fromSnakeCase('this_IS_2021_Test')).toEqual(['this', 'IS', '2021', 'Test'])
  })
})

describe('toSnakeCase', () => {
  it('should join an array of words with underscores and convert to lowercase', () => {
    expect(toSnakeCase(['hello', 'world'])).toBe('hello_world')
    expect(toSnakeCase(['this', 'is', 'a', 'test'])).toBe('this_is_a_test')
  })

  it('should handle an empty array', () => {
    expect(toSnakeCase([])).toBe('')
  })

  it('should handle an array with a single element', () => {
    expect(toSnakeCase(['hello'])).toBe('hello')
    expect(toSnakeCase(['world'])).toBe('world')
  })

  it('should handle words with uppercase letters', () => {
    expect(toSnakeCase(['Hello', 'World'])).toBe('hello_world')
    expect(toSnakeCase(['This', 'Is', 'A', 'Test'])).toBe('this_is_a_test')
  })

  it('should handle words with numbers', () => {
    expect(toSnakeCase(['hello', 'world', '123'])).toBe('hello_world_123')
    expect(toSnakeCase(['this', 'is', '2021'])).toBe('this_is_2021')
  })

  it('should handle mixed words with uppercase, lowercase, and numbers', () => {
    expect(toSnakeCase(['Hello', 'World', '123'])).toBe('hello_world_123')
    expect(toSnakeCase(['this', 'IS', '2021', 'Test'])).toBe('this_is_2021_test')
  })
})
