/**
 * @param {Array} arr
 * @returns {Array}
 */
export default function cleanArray(arr) {
  const newArray = []
  for (let i = 0; i < arr.length; i++) {
    if (!!arr[i] && arr[i] !== 0) {
      newArray.push(arr[i])
    }
  }
  return newArray
}
