export default {
  encode(object) {
    return JSON.stringify(object, (key, value) => {
      if (typeof value === 'function') {
        return undefined
      }

      return value
    })
  },
  decode(object) {
    return JSON.parse(object)
  },
  check(string) {
    try {
      if (typeof JSON.parse(string) === 'object') {
        return true
      }
    } catch (error) {
      return false
    }
  }
}
