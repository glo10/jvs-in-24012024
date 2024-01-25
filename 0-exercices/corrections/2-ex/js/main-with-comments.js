/**
 * Au chargement de la page, on lance nos opérations
 * C'est une sécurité pour être sûre que tout le HTML est déjà chargé
 *  au moment ou nos scripts vont s'exécuter
 * 
 * Autre notation window.onload = (() => {})
 */
window.addEventListener('load', () => {
  /**
   * Attention avec querySelectorAll on récupère un tableau d'éléments
   *  quoi qu'il arrive, même s'il y a un seul élément, on aura quand même un tableau
   * 
   * Ici je récupère tous les inputs sauf celui qui concerne les technos
   * 
   * On ne peut pas utiliser .addEventListener directement
   *  avec le tableau des élémentsrécupérés par querySelectorAll
   * 
   * Il faut obligatoirement parcourir ce tableau, pour pouvoir utiliser addEventListener
   */
  const inputs = document.querySelectorAll('input:not([data-show-id="technos"])')
  inputs.forEach(input => {
    input.addEventListener('input', function (e) {
      // pour les ID méthode spécifique getElementById
      const el = document.getElementById(e.target.dataset.showId)
      el.firstElementChild.innerHTML = e.target.value
    })
  })

  document.querySelector('.btn.btn-success').addEventListener('click', (e) => {
    /**
     * Empêcher le comportement par défaut d'un bouton
     * Par exemple dans un formulaire avec les balises form, il y a soumission des données
     */
    e.preventDefault()
    const techno = document.querySelector('[data-show-id="technos"]')
    const technosBlock = document.querySelector('#technos')
    let ul = technosBlock.querySelector('ul')
    /**
     * si ul === null ie résultat de l'évaluation est true
     *  veut dire que l'élement ul n'existe pas le document HTML
     *  donc on va le créer
     * s'il existe déjà la condition sera évalué à false donc le bloc du code
     *  à l'intérieur du if, ne sera pas exécuté
     * */
    if (ul === null) {
      ul = document.createElement('ul')
      ul.classList.add('list-group')
      technosBlock.append(ul)
    }
    const li = document.createElement('li')
    // Ajout de la class list-group-item
    li.classList.add('list-group-item')
    // Ajout du contenu
    li.innerHTML = techno.value
    ul.appendChild(li)
    // clean
    techno.value = ''
  })
})
