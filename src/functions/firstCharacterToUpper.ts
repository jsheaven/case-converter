/**
 * Converts the first character of a string to uppercase, leaving the rest of the string unchanged.
 *
 * @param str - The input string to be converted.
 * @returns The input string with the first character converted to uppercase.
 * If the input string is empty, returns an empty string.
 */
export const firstCharacterToUpper = (str: string): string => {
  if (!!str) {
    return str[0].toUpperCase() + str.slice(1)
  }
  return str
}
