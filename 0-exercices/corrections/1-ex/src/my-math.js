export default class MyMath {
  min (numbers) { // Algo 14
    let min = numbers[0]
    numbers.forEach(number => {
      if (number < min) {
        min = number
      }
    })
    return min
  }

  max (numbers) { // Bonus : même chose qu'Algo 14 mais avec max
    let max = numbers[0]
    numbers.forEach(number => {
      if (number > max) {
        max = number
      }
    })
    return max
  }

  permutation (coca, water) { // Algo 9
    const empty = coca
    coca = water
    water = empty
    return [coca, water]
  }

  fibonacci (max = 89) { // Algo 10
    const values = [1, 2]
    let next = 1
    for (let i = 0; next < max; i++) {
      next = values[i] + values[i + 1]
      if (next <= max) {
        values.push(next)
      }
    }
    return values
  }

  multiply (table, end = 10) { // Algo 6
    const results = []
    for (let i = 1; i <= end; i++) {
      const result = table * i
      results.push(`${table}*${i}=${result}`)
    }
    return results.join(';')
  }

  calcTTC (ht, rate) { // Algo 3
    return ht * (1 + (rate / 100))
  }

  tree (nb) { // Algo 8
    let result = ''
    for (let i = 1; i <= nb; i++) {
      for (let j = 0; j < i; j++) {
        result += i
      }
    }
    return result
  }

  calcAvg (...args) { // Algo 2
    let sum = 0
    for (let i = 0; i < args.length; i++) {
      sum += args[i]
    }
    return sum / args.length
  }

  calcAvgArray (numbers) {
    let sum = 0
    numbers.forEach(num => {
      sum += num
    })
    return sum / numbers.length
  }

  divide (nb1, nb2) { // Algo 15
    if (nb2 === 0) {
      throw new Error('Impossible to divide by 0')
    }
    return nb1 / nb2
  }
}
