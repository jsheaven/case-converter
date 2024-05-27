/**
 * Converts the first character of a string to lowercase, leaving the rest of the string unchanged.
 *
 * @param str - The input string to be converted.
 * @returns The input string with the first character converted to lowercase.
 * If the input string is empty, returns an empty string.
 */
export const firstCharacterToLower = (str: string): string => {
  if (!!str) {
    return str[0].toLowerCase() + str.slice(1)
  }
  return str
}
