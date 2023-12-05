const verify = () => {
  if (Array.prototype.flatMap) {
    return
  }
  // eslint-disable-next-line no-extend-native
  Array.prototype.flatMap = function (callback, thisArg) {
    return this.map(callback, thisArg).reduce((acc, val) => acc.concat(val), [])
  }
}

export default verify
