/**
 * Converts a kebab-case formatted string into an array of words, preserving original word boundaries.
 *
 * @param str - The input string in kebab-case format to be converted.
 * @returns An array of strings representing individual words extracted from the input string.
 */
export const fromKebabCase = (str: string): Array<string> => str.split('-').filter((v) => !!v)

/**
 * Converts an array of strings representing words into a kebab-case formatted string.
 *
 * @param parts - An array of strings representing individual words to be converted.
 * @returns A kebab-case formatted string created from the input array of words.
 */
export const toKebabCase = (parts: Array<string>): string => parts.join('-').toLowerCase()
