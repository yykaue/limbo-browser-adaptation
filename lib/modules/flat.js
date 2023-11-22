/**
 *Created by miaoying <yykaue@qq.com> on 2023/11/20.
 */
const verify = () => {
  console.log('verify flat')
  if (Array.prototype.flat) {
    return
  }
  console.log('不支持flat')
  // eslint-disable-next-line no-extend-native
  Array.prototype.flat = function (depth = 1) {
    const stack = [{ list: this, curDepth: 0 }]
    const result = []
    while (stack.length) {
      const next = stack.pop()
      if (Array.isArray(next.list) && next.curDepth <= depth) {
        next.list.forEach(item => {
          stack.push({ list: item, curDepth: next.curDepth + 1 })
        })
      } else {
        result.unshift(next.list)
      }
    }
    return result
  }
}

export default verify
