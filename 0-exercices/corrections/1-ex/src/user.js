export default class User {
  constructor (age = 0) {
    this.age = age
  }

  getGeneration () { // Algo 1
    if (this.age <= 10) {
      return 'Enfant'
    } else if (this.age > 10 && this.age < 18) {
      return 'Adolescent'
    } else if (this.age < 50) {
      return 'Majeur'
    } else {
      return 'Senior'
    }
  }

  checkEmail (email) { // Algo 7
    return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(email)
  }
}
