/**
 *Created by limbo <yykaue@qq.com> on 2023/11/14.
 */
const verify = () => {
  try {
    // eslint-disable-next-line no-new
    new AbortController()
  } catch (e) {
    class AbortController {
      constructor (payload) { }
      abort () {}
    }
    window.AbortController = AbortController
  }
}

export default verify
