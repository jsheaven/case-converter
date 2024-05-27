import { convertFromTo, convert } from '../../dist/index.esm'

describe('convertFromTo', () => {
  it('should convert strings from one text casing format to another using custom conversion functions', () => {
    // Define custom conversion functions for testing
    const fromFn = () => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    const toFn = (parts: string[]) => parts.join(':') // Join with hyphen

    // Test conversion from snake_case to kebab-case
    expect(convertFromTo(fromFn, toFn, 'any')).toBe('1:2:3:4:5:6:7:8:9:10')
  })
})

describe('convert', () => {
  it('should convert strings from one text casing format to another', () => {
    // Test converting from camelCase to kebab-case
    expect(convert('CamelCase', 'KebabCase', 'helloWorld')).toBe('hello-world')

    // Test converting from pascalCase to snake_case
    expect(convert('PascalCase', 'SnakeCase', 'HelloWorld')).toBe('hello_world')

    // Test converting from snake_case to PascalCase
    expect(convert('SnakeCase', 'PascalCase', 'hello_world')).toBe('HelloWorld')

    // Test converting from kebab-case to CamelCase
    expect(convert('KebabCase', 'CamelCase', 'hello-world')).toBe('helloWorld')

    // Test converting from any case to SnakeCase
    expect(convert('Any', 'SnakeCase', 'helloWorld_thisIsA-Test')).toBe('hello_world_this_is_a_test')
  })
})
