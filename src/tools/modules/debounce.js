/**
 * @param {Function} func
 * @param {number} wait
 * @return {*}
 */
export default function debounce(func, wait = 0) {
  let timeout, args, context, timestamp, result

  const later = function (s) {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp
    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 time
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      result = func.apply(context, args)
    }
    s(result)
  }

  return function (...params) {
    args = params
    context = this
    timestamp = +new Date()
    return new Promise(function (s,f) {
      timeout = setTimeout(later, wait, s)
    })
  }
}
