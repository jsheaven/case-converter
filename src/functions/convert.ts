import { fromCamelCase, toCamelCase } from './converter'
import { fromAny } from './converter/anyCase'
import { fromKebabCase, toKebabCase } from './converter/kebabCase'
import { fromPascalCase, toPascalCase } from './converter/pascalCase'
import { fromSnakeCase, toSnakeCase } from './converter/snakeCase'

/**
 * The supported text casing formats.
 */
export type TextCase = 'CamelCase' | 'SnakeCase' | 'PascalCase' | 'KebabCase'

/**
 * A mapping of text casing formats to functions for converting strings from those formats.
 */
const FROM_CASE_MAP: Record<TextCase | 'Any', (str: string) => Array<string>> = {
  CamelCase: fromCamelCase,
  PascalCase: fromPascalCase,
  SnakeCase: fromSnakeCase,
  KebabCase: fromKebabCase,
  Any: fromAny,
}

/**
 * A mapping of text casing formats to functions for converting arrays of words to those formats.
 */
const TO_CASE_MAP: Record<TextCase, (parts: Array<string>) => string> = {
  CamelCase: toCamelCase,
  PascalCase: toPascalCase,
  SnakeCase: toSnakeCase,
  KebabCase: toKebabCase,
}

/**
 * Converts strings from one text casing format to another using custom conversion functions.
 *
 * @param fromFn - A function to convert strings from the source text casing format to an array of words.
 * @param toFn - A function to convert arrays of words to the target text casing format.
 * @param str - The string to be converted.
 * @returns The converted string in the target format.
 */
export const convertFromTo = (
  fromFn: (str: string) => Array<string>,
  toFn: (parts: Array<string>) => string,
  str: string,
): string => {
  // Convert input string to arrays of words using the provided function for the source format,
  const strs = fromFn(str)
  // then filter out any empty strings from the resulting arrays.
  const parts: Array<string> = strs.filter((word) => !!word)

  // Convert the array of words to a string in the target format using the provided function.
  return toFn(parts)
}

/**
 * Converts strings from one text casing format to another.
 *
 * @param fromCase - The source text casing format.
 * @param toCase - The target text casing format.
 * @param str - The string to be converted.
 * @returns The converted string in the target format.
 */
export const convert = (fromCase: TextCase | 'Any', toCase: TextCase, str: string): string => {
  return convertFromTo(FROM_CASE_MAP[fromCase], TO_CASE_MAP[toCase], str)
}
