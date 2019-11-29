/**
 * @param {HTMLElement} ele
 * @param {string} cls
 */
export default function toggleClass(ele, cls) {
  if (!ele || !cls) {
    return
  }
  let classString = ele.className
  const nameIndex = classString.indexOf(cls)
  if (nameIndex === -1) {
    classString += '' + cls
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + cls.length)
  }
  ele.className = classString
}
