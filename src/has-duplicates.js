export default hasDuplicates

/**
 * This method will check if an array has duplicate values.
 *
 * @param {Array} array - The Array to remove all duplicates from.
 * @return {boolean} - true => contains duplicates; false => does not contain duplicates
 */

function hasDuplicates(array) {
  return new Set(array).size !== array.length
}
