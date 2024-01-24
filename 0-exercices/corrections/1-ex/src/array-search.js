export default class ArraySearch {
  countPopulation (countries) { // Algo 11
    let sum = 0
    countries.forEach(value => {
      sum += value
    })
    return {
      population: sum,
      countries: countries.length
    }
  }

  generateNumbers (total = 10, min = 0, max = 100) {
    const numbers = []
    for (let i = 0; i < total; i++) {
      const num = Math.floor(Math.random() * (max - min + 1) + min) // Génère un nombre aléatoire entre 0 et 100
      numbers.push(num)
    }
    return numbers
  }

  slice (limit = 50, total = 10, min = 0, max = 100) { // Algo 12
    const numbers = this.generateNumbers(total, min, max)
    const less = []
    const greater = []
    numbers.forEach(nb => {
      if (nb <= limit) {
        less.push(nb)
      } else {
        greater.push(nb)
      }
    })
    return [less, greater]
  }
}
