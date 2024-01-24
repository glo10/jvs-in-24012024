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
    age = prompt('Saisir un age supérieur ou égale à 18 ans')
    age = parseInt(age)
    console.error(age, 'pas >= 18' )
    /**
     * Avec do même si on saisit un age correctement étant donnée que la condition est vérifié à la fin
     * l'age correcte sera d'abord affiché (do) puis après la condition sera fausse
     * et on sortira de la boucle
     * Pour ne pas afficher le console.error, il faudra mettre une condition pour dire
     * qu'on affiche uniquement quand l'age est inférieur à 18
     */
} while(age < 18)
// Avec la boucle 
console.log(
    'tant que l\'age n\'est pas correcte',
    'l\'utilisateur reste coincé dans la boucle do while',
    'et cette ligne ne s\'affiche que lorsqu\'il en sort'
)