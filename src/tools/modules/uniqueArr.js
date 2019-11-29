/**
 * @param {Array} arr
 * @returns {Array}
 */
export default function uniqueArr(arr) {
  return Array.from(new Set(arr))
}
