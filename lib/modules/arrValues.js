const verify = () => {
  if (!Array.prototype.values) {
    // eslint-disable-next-line no-extend-native
    Array.prototype.values = function () {
      var array = this
      var currentIndex = 0
      var length = array.length

      return {
        next: function () {
          if (currentIndex < length) {
            return { value: array[currentIndex++], done: false }
          } else {
            return { done: true }
          }
        }
      }
    }
  }
}

export default verify
