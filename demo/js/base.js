let firstName = "Glodie";
let lastName = "Tshimini";
let age = 32;
// commentaire sur une ligne = code non exécuté
/**
 * commentaire
 * sur
 * plusieurs
 * lignes
 */

// Typage dynamique à partir de la valeur affectée à la variable
let nb1 = 10; // il va typer en number
let nb2 = "20";

/**
 * number et string, opérateur + ici est exécuté en tant qu'opérateur de concaténation
 * et non le + mathématique pour l'addition
 */
let addition = nb1 + nb2;
console.error("résultat de l'addition avec un typage dynamique ", addition);

// typeof instruction pour savoir le type d'une variable

console.log(typeof nb1, typeof nb2); // number string
console.log(typeof nb3); // nb3 n'est pas défini et donc typage dynamique à undefined

// Concaténation avec l'opérateur +

console.info("nom et prénom", firstName + " " + lastName);

// concaténation `` associé à ${} pour l'interpolation (combinaison des 2)

console.info("nom et age", `${firstName} ${age}`);

// transpytage = changer le type d'une variable

nb2 = parseInt(nb2); // transformer le type string en number

console.log("addition de nb1 et nb2 après transtypage", nb1 + nb2);
