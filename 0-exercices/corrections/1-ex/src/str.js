export default class Str {
  min (words) { // Algo 14
    let minLength = words[0].length
    words.forEach(word => {
      const currentLength = word.length
      if (currentLength <= minLength) {
        minLength = currentLength
      }
    })

    const mins = []
    words.forEach(word => {
      if (word.length === minLength) {
        mins.push(word)
      }
    })

    if (mins.length === 1) {
      return mins[0]
    }
    return mins
  }
}
