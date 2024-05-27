/**
 * Converts a snake_case formatted string into an array of words, preserving original word boundaries.
 *
 * @param str - The input string in snake_case format to be converted.
 * @returns An array of strings representing individual words extracted from the input string.
 */
export const fromSnakeCase = (str: string): Array<string> => str.split('_').filter((v) => !!v)

/**
 * Converts an array of strings representing words into a snake_case formatted string.
 *
 * @param parts - An array of strings representing individual words to be converted.
 * @returns A snake_case formatted string created from the input array of words.
 */
export const toSnakeCase = (parts: Array<string>): string =>
  parts
    .join('_') // Concatenate all words with underscore
    .toLowerCase() // Convert the whole string to lowercase
