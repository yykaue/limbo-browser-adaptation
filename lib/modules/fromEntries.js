const verify = () => {
  if (typeof Object.fromEntries === 'function') {
    return
  }
  // eslint-disable-next-line no-extend-native

  Object.fromEntries = function (entries) {
    if (!entries || !Array.isArray(entries)) {
      throw new Error('Object.fromEntries() requires a single iterable argument')
    }

    const result = {}
    for (const [key, value] of entries) {
      result[key] = value
    }
    return result
  }
}

export default verify
