/**
 * Remove class from element
 * @param {HTMLElement} ele
 * @param {string} cls
 */
import hasClass from './hasClass'
export default function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}
