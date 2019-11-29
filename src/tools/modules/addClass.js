/**
 * 为一个DOM元素添加一个class
 * @param {HTMLElement} ele
 * @param {string} cls
 */
import hasClass from './hasClass'
export default function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}
