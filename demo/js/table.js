/**
 * Une variable qui peut stocker plusieurs valeurs
 * la première valeur est placée à l'indice 0
 * déclaration d'un tableau avec []
 */

const numbers = []

numbers[0] = 1 // au rang ou à l'indice 0 on affecte la valeur 4
numbers[1] = 10
numbers[10] = 100

console.log('tableau nombre', numbers, 'taille du tableau', numbers.length)

const firstNames = [
    'Pablo',
    'Oscar',
    'Alain',
    'Margot'
]

// Ajouter Thomas à la fin du tableau

firstNames.push('Thomas')

console.dir('Avec thomas', firstNames)
// Supprimer pablo

firstNames.shift()

console.dir('Sans pablo', firstNames)