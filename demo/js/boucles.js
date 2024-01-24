const cities = [ 'Paris', 'Marseille', 'Lille', 'Bordeaux', 'Lyon']

// Avec la boucle for

for(let compteur = 0; compteur < cities.length; compteur++) {
    // console.log('incide ou rang : ', compteur,  'ville : ', cities[compteur])
}

// Avec for.. in ici les indices des villes
for(let city in cities) {
    // console.log('Ville : ', city)
}

for(let city of cities) {
    // console.log('Ville : ', city)
}

// Avec la boucle while
let age = 0
do {
    age = prompt('Saisir un age supérieur à 18 ans')
    age = parseInt(age)
    console.log('age', age )
} while(age < 18)
// Avec la boucle 
console.log('sortien de la boucle')