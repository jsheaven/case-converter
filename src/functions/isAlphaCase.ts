/**
 * Checks if a string consists only of alphabetic characters (both uppercase and lowercase).
 *
 * @param str - The input string to be checked.
 * @returns A boolean indicating whether the input string consists only of alphabetic characters.
 */
export const isAlphaCase = (str: string): boolean => /^[a-zA-Z]+$/.test(str)
