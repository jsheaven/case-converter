import { firstCharacterToUpper } from '../firstCharacterToUpper'
import { isAlphaCase } from '../isAlphaCase'
import { isLowerCase } from '../isLowerCase'

/**
 * Converts a PascalCase formatted string into an array of words, preserving original word boundaries.
 *
 * @param str - The input string in PascalCase format to be converted.
 * @returns An array of strings representing individual words extracted from the input string.
 */
export const fromPascalCase = (str: string): Array<string> => {
  // Split the input string by capital letters
  const intermediateResult = str.split(/(?=[A-Z])/).filter((v) => !!v)

  // If the input contains only one word or no capital letters, return the intermediate result
  if (intermediateResult.length <= 1) {
    return intermediateResult
  }

  // Initialize an array to store the final result
  const result: Array<string> = []

  // Initialize variables to track lowercase status of last and current elements
  let lastIsLowerCase
  let currentIsLowerCase

  // Iterate over the intermediate result to combine consecutive lowercase letters into words
  let lastElement = intermediateResult[0]
  for (let i = 1; i < intermediateResult.length; i++) {
    const currentElement = intermediateResult[i]

    // Extract the last and current characters for determining lowercase status
    const lastCharacter = lastElement.substring(lastElement.length - 1, lastElement.length)
    const currentCharacter = currentElement.substring(0, 1)

    // Update the lowercase status based on the last and current characters
    if (isAlphaCase(lastCharacter)) {
      lastIsLowerCase = isLowerCase(lastCharacter)
    }
    if (isAlphaCase(currentCharacter)) {
      currentIsLowerCase = isLowerCase(currentCharacter)
    }

    // Check if there is a change in lowercase status
    const isChange = lastIsLowerCase !== currentIsLowerCase

    // If there is a change, push the last element to the result array and update the last element
    if (isChange) {
      result.push(lastElement)
      lastElement = currentElement
    } else {
      // If there is no change, concatenate the current element to the last element
      lastElement += currentElement
    }
  }

  // Push the last element to the result array
  result.push(lastElement)

  // Return the final result array
  return result
}

/**
 * Converts an array of strings representing words into a PascalCase formatted string.
 *
 * @param parts - An array of strings representing individual words to be converted.
 * @returns A PascalCase formatted string created from the input array of words.
 */
export const toPascalCase = (parts: Array<string>): string =>
  parts
    .map((v) => v.toLowerCase()) // Convert each word to lowercase
    .map((v) => firstCharacterToUpper(v)) // Capitalize the first character of each word
    .join('') // Concatenate all words into a single string
