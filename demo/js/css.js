const h1 = document.querySelector('h1')

/**
 * Ajouter directement les propriétés avec .style
 *  suivi de la propriété CSS en camleCase pour les propriétés composées
*/
h1.style.color = 'red'
h1.style.textAlign = 'center'
/**
 * Ou ajouter des classes CSS
 *  côté css ses classes ont des propriétés déjà définies côté CSS
 *  donc elles viendront s'appliquer à votre élément qui possède cette classe
 * *
 */
const h2 = document.querySelector('h2')
h2.classList.add('title-2')