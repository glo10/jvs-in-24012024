const city = 'P'

 /**
  * Opérateurs logiques
  * AND (ET) : notation avec && toutes les conditions doivent être vraies pour que la condition finale = true (vrai)
  * OR (OU) : notation avec || (ALT GR + 6) au moins une des conditions est vraie pour que le résultat fini soit évalué à true
  * N'est pas ou contraire : notation ! (!false = true) (!true = false)
  * */

/**
 * = : opérateur d'affectation pour attribuer une valeur à une variable ou constante
 * == : opérateur pour vérifier que 2 variables ont la même valeur
 * === : opérateur pour vérifier que 2 variables ont la même valeur et le même type
 */
console.log('avec double égale ', 10 == '10') // true (valeur 10 d'un côté et de l'autre)
console.log('avec triple égale ', 10 === '10') // false (valeur ok mais le type number n'est pas égale au type string)

// vérification d'une certaine condition
if (city === 'PAris') { // une ou plusieurs conditions
    console.error('mal écrit')
}
// .length retourne la taille ou le nombre de caractère dans la valeur Paris
else if (city === 'Paris' && city.length > 5) { // une ou plusieurs conditions
    console.error('5 n\'est pas strictement supérieur à 5')
}
else if (city === 'Paris' ||  city.length > 5) { // une ou plusieurs conditions
console.info('condition vérifié ici donc le code entre le {} sera éxécuté')
}
else {// cas par défaut
    console.log('aucune des conditions précédentes est vraie')
}