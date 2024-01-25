// Récupérer le premier h1 dans le document HTML
const h1 = document.querySelector('h1')
console.log('h1', h1)
// Récupérer le premier h2 dans le document HTML
const h2 = document.querySelector('h2')
console.log('h2', h2)
// Récupérer tous les li avec querySelectorAll dans le document HTML
const items = document.querySelectorAll('li')
console.dir('li', items)
// Récupérer ul dans le document HTML
const ul = document.querySelector('ul')
// créer un li avec une valeur textuelle
const item10 = document.createElement('li')
item10.innerText = 'ajouté à la fin'
// Ajouter ce li à la fin de ul
ul.append(item10)
// créer un li avec une valeur textuelle
const item0 = document.createElement('li')
item0.innerText = 'ajouté au début avec JS'
// Ajouté ce li au début du ul
ul.prepend(item0)

// Créer un bouton
const btnContent = '<button id="btn" class="btn btn-success">appuyez sur ce bouton</button>' // string
// Ajouter directement ce bouton juste après le ul
ul.insertAdjacentHTML('afterend', btnContent)
const btn = document.querySelector('button')
/**
 * Méthodo gestion des événements
 *  1. Séléctionner un élément avec querySelector ou autre méthode pour séléctionner les éléments HTML
 *  2. Ajouter un écouteur d'événement avec la méthode addEventListener
 * La méthode addEventListener  prend 3 arguments
 *  1 : nom de l'événement
 *  2 : fonction de callback = fonction qui sera éxécuté une fois que l'événement aura lieu
 *  3 : facultatif (vaut false par defaut) : permet de gérer la propagation de l'événement (capture ou bubble cf. cours)
 */

/**
 * Ici avec l'appel d'une fonction externe
 * l'avantage est de pouvoir utiliser cette fonction externe pour d'autres cas de figure qui nécessite
 * le même traitement
 */
btn.addEventListener('click', btnActionCallback)

function btnActionCallback(event) {
    /**
     * event un objet qui caractérise l'événement qui a eu lieu
     *  De cet objet, on peut récupérer des informations de plusieurs types grâce
     *  à la notation pointé, par exemple , event.type, event.target, etc.
     *  Généralement on aura besoin d'aller récupérer les informations dans e.target
     *  target réprésente la cible, c'est-à-dire l'élément HTML qui est à l'origine de l'événement
     */
    console.dir('objet event appelée event', event)
    console.log('click avec une fonction externe')
}

/**
 * Avec une fonction anonyme
 * Une exécution propre et spécifique
 * Autrement dit vous n'en aurez pas besoin en dehors de l'événement
 */
btn.addEventListener('click', function(evt) {
    console.dir('objet event appelée evt ici', evt)
    console.log('click avec une fonction anonyme')
})

/**
 * Idem que la fonction anonyme mais avec la notation fléchée
 * qui apporte une différence au niveau du contexte d'exécution
 */
btn.addEventListener('click', (e) => {
    console.dir('objet event appelée e', e)
    alert(e.target.innerText)
    console.log('click avec une fonction anonyme avec la notation fléchée')
})