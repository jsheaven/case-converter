import { fromCamelCase } from './camelCase'
import { fromKebabCase } from './kebabCase'
import { fromSnakeCase } from './snakeCase'

/**
 * Converts a string in various casing formats into an array of words, preserving original word boundaries.
 * Supports conversion from snake_case, kebab-case, pascalCase and camelCase formats.
 *
 * @param str - The input string in any supported casing format to be converted.
 * @returns An array of strings representing individual words extracted from the input string.
 */
export const fromAny = (str: string): Array<string> =>
  fromSnakeCase(str) // Convert from snake_case
    .flatMap((v) => fromKebabCase(v)) // Convert from kebab-case
    .flatMap((v) => fromCamelCase(v)) // Convert from camelCase
    .filter((v) => !!v) // Filter out empty strings
