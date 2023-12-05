const verify = () => {
  if (typeof window.globalThis === 'object') return
  var getGlobal = function () {
    if (typeof self !== 'undefined') { return self }
    if (typeof window !== 'undefined') { return window }
    if (typeof global !== 'undefined') { return global }
    throw new Error('unable to locate global object')
  }
  // eslint-disable-next-line no-extend-native
  Object.defineProperty(Object.prototype, 'tempThis', {
    get: function () {
      return getGlobal()
    },
    configurable: true
  })
  window.globalThis = window.tempThis
  delete Object.prototype.tempThis
}

export default verify
