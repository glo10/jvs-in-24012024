// Algo 1
function getGeneration (age) {
    if (age <= 10) {
        return 'Enfant'
    } else if (age > 10 && age < 18) {
        return 'Adolescent'
    } else if (age < 50) {
        return 'Majeur'
    } else {
        return 'Senior'
    }
}

// Algo 2
function calcAvg (...args) {
    let sum = 0
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }
    return sum / args.length
}

function calcAvgArray (numbers) {
    let sum = 0
    numbers.forEach(num => {
        sum += num
    })
    return sum / numbers.length
}

// Algo 3
function calcTTC (ht, rate) {
    return ht * (1 + (rate / 100))
}

// Algo 4
function getMoment (hour) {
    if (hour > 6 && hour < 12) {
        return 'Matin'
    } else if (hour >= 12 && hour < 18) {
        return 'Après-midi'
    } else if (hour >= 18) {
        return 'Soirée'
    }
    return 'Nuit'
}


// Algo 5
function getAll () {
    const min = this.code * 1000
    const max = min + 1000
    let i = min
    while (i < max) {
        this.postCodes.push(i)
        i++
    }
    return this.postCodes
}

// Algo 5 affichage
function showAll () { 
    getAll()
    return this.postCodes.join(';')
}

// Algo 6
function multiply (table, end = 10) {
    const results = []
    for (let i = 1; i <= end; i++) {
        const result = table * i
        results.push(`${table}*${i}=${result}`)
    }
    return results.join(';')
}

// Algo 7
function checkEmail (email) {
    return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(email)
}

// Algo 8
function tree (nb) {
    let result = ''
    for (let i = 1; i <= nb; i++) {
        for (let j = 0; j < i; j++) {
        result += i
        }
    }
    return result
}

// Algo 9
function permutation (coca, water) {
    const empty = coca
    coca = water
    water = empty
    return [coca, water]
}

// Algo 10
function fibonacci (max = 89) {
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

// Algo 11
function countPopulation (countries) {
    let sum = 0
    countries.forEach(value => {
        sum += value
    })
    return {
        population: sum,
        countries: countries.length
    }
}

function generateNumbers (total = 10, min = 0, max = 100) {
    const numbers = []
    for (let i = 0; i < total; i++) {
        const num = Math.floor(Math.random() * (max - min + 1) + min) // Génère un nombre aléatoire entre 0 et 100
        numbers.push(num)
    }
    return numbers
}

// Algo 13
function slice (limit = 50, total = 10, min = 0, max = 100) { // Algo 12
    const numbers = generateNumbers(total, min, max)
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

// Algo 14
function min (numbers) {
    let min = numbers[0]
    numbers.forEach(number => {
        if (number < min) {
        min = number
        }
    })
    return min
}

// Bonus : même chose qu'Algo 14 mais avec max
function max (numbers) { 
    let max = numbers[0]
    numbers.forEach(number => {
        if (number > max) {
        max = number
        }
    })
    return max
}

// Algo 15
function divide (nb1, nb2) {
    if (nb2 === 0) {
        throw new Error('Impossible to divide by 0')
    }
    return nb1 / nb2
}