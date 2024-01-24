let fistName = 'Glodie'
// commentaire sur une ligne = code non exécuté
/**
 * commentaire
 * sur
 * plusieurs
 * lignes
 */

// Typage dynamique à partir de la valeur affectée à la variable
let nb1 = 10 // il va typer en number
let nb2 = '20'

/**
 * number et string, opérateur + ici est exécuté en tant qu'opérateur de concaténation
 * et non le + mathématique pour l'addition
*/
let addition = nb1 + nb2
console.log('résultat de l\'addition avec un typage dynamique ', addition)

// typeof instruction pour savoir le type d'une variable

console.log(typeof nb1) // number
console.log(typeof nb2) // string
console.log(typeof nb3) // nb3 n'est pas défini et donc typage dynamique à undefined