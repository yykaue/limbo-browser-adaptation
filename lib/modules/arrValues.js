/**
 *Created by limbo <yykaue@qq.com> on 2023/11/14.
 */
const verify = () => {
  if (Array.prototype.values) {
    return this.values()
  }

  let index = 0
  return {
    next: function () {
      if (index < this.length) {
        return { value: this[index++], done: false }
      } else {
        return { done: true }
      }
    },
    [Symbol.iterator]: function () { return this }
  }
}

export default verify
