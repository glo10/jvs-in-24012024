export default class PostalCode {
  constructor (code) {
    this.code = code
    this.postCodes = []
  }

  getAll () { // Algo 5
    const min = this.code * 100
    const max = min + 100
    let i = min
    while (i < max) {
      this.postCodes.push(i)
      i++
    }
    return this.postCodes
  }

  showAll () { // Algo 5 affichage
    this.getAll()
    return this.postCodes.join(';')
  }
}
