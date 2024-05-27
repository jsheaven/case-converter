import { firstCharacterToLower } from '../firstCharacterToLower'
import { fromPascalCase, toPascalCase } from './pascalCase'

/**
 * Converts a camelCase formatted string into an array of words, preserving original word boundaries.
 *
 * @param str - The input string in camelCase format to be converted.
 * @returns An array of strings representing individual words extracted from the input string.
 */
export const fromCamelCase = fromPascalCase

/**
 * Converts an array of strings representing words into a camelCase formatted string.
 *
 * @param parts - An array of strings representing individual words to be converted.
 * @returns A camelCase formatted string created from the input array of words.
 */
export const toCamelCase = (parts: Array<string>): string => {
  // Convert the array of strings to PascalCase and then make the first character lowercase
  return firstCharacterToLower(toPascalCase(parts))
}
