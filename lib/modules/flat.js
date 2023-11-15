/**
 *Created by limbo <yykaue@qq.com> on 2023/11/14.
 */
const verify = () => {
  if (Array.prototype.flat) {
    return
  }

  // eslint-disable-next-line no-extend-native
  Array.prototype.flat = flatArr
  function flatArr (depth = 1) {
    const arr = this
    const reArr = []
    let depNum = 0
    const flat = (arr) => {
      arr.forEach((item, index, array) => {
        if (Object.prototype.toString.call(item).slice(8, -1) === 'Array') {
          if (depNum < depth) {
            depNum++
            flat(item)
          } else {
            reArr.push(item)
            if (index === array.length - 1) depNum = 0
          }
        } else {
          reArr.push(item)
          if (index === array.length - 1) depNum = 0
        }
      })
    }
    flat(arr)
    return reArr
  }
}

export default verify
