import { jest } from '@jest/globals'
import { fromAny } from '../../../dist/index.esm'

describe('fromAny', () => {
  it('should convert a string in snake_case format to an array of words', () => {
    expect(fromAny('hello_world')).toEqual(['hello', 'world'])
    expect(fromAny('_hello_world_')).toEqual(['hello', 'world'])
  })

  it('should convert a string in kebab-case format to an array of words', () => {
    expect(fromAny('hello-world')).toEqual(['hello', 'world'])
    expect(fromAny('--hello-world--')).toEqual(['hello', 'world'])
  })

  it('should convert a string in camelCase format to an array of words', () => {
    expect(fromAny('helloWorld')).toEqual(['hello', 'World'])
    expect(fromAny('helloWorld123')).toEqual(['hello', 'World123'])
  })

  it('should handle mixed formats and filter out empty strings', () => {
    expect(fromAny('hello_world-this_is_a-test')).toEqual(['hello', 'world', 'this', 'is', 'a', 'test'])
    expect(fromAny('helloWorld-thisIsA-Test')).toEqual(['hello', 'World', 'this', 'Is', 'A', 'Test'])
    expect(fromAny('hello_world_this_is_a_test')).toEqual(['hello', 'world', 'this', 'is', 'a', 'test'])
  })

  it('should handle strings with only underscores, hyphens, or camelCase', () => {
    expect(fromAny('_')).toEqual([])
    expect(fromAny('--')).toEqual([])
    expect(fromAny('camelCase')).toEqual(['camel', 'Case'])
  })

  it('should handle mixed formats with uppercase letters and numbers', () => {
    expect(fromAny('helloWorld-this_is_a123-Test')).toEqual(['hello', 'World', 'this', 'is', 'a123', 'Test'])
    expect(fromAny('hello_world_this-is-A123-Test')).toEqual(['hello', 'world', 'this', 'is', 'A123', 'Test'])
    expect(fromAny('helloWorld_this-isA-123test')).toEqual(['hello', 'World', 'this', 'is', 'A', '123test'])
  })

  it('should handle mixed formats with leading and trailing underscores or hyphens', () => {
    expect(fromAny('_helloWorld_this-is-A123-Test_')).toEqual(['hello', 'World', 'this', 'is', 'A123', 'Test'])
    expect(fromAny('--hello_world_this-is-A123-Test--')).toEqual(['hello', 'world', 'this', 'is', 'A123', 'Test'])
    expect(fromAny('_hello_world_this_is-A123-Test1234_')).toEqual(['hello', 'world', 'this', 'is', 'A123', 'Test1234'])
  })
})
