/**
 *Created by limbo <yykaue@qq.com> on 2023/11/14.
 */
const verify = () => {
  if (typeof globalThis === 'object') return
  Object.prototype.__defineGetter__('__magic__', function () {
    return this
  })
  const __magic__ = {}
  __magic__.globalThis = __magic__ // 临时属性
  delete Object.prototype.__magic__
}

export default verify
