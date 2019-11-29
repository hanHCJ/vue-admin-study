/**
 * @param {string} val
 * @returns {string}
 */
export default function html2Text(val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.innerText
}
