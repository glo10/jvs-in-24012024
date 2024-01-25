const inputBg = document.querySelector('#body-background')

inputBg.addEventListener('change', function(e) {
    document.body.style.background = e.target.value
})

const img = document.querySelector('img')

img.addEventListener('mouseenter', function(e) {
    /**
     * this = img
     * ie img.style.cursor = 'pointer'
     * ie que e.target.style.cursor = 'pointer'
     */
    this.style.cursor = 'pointer'

    // ajouter un texte dans le header

    const header = document.querySelector('header')
    const p = document.querySelector('header p')
    if(p === null) { // paragraphe n'existe pas dans le header donc création
        header.insertAdjacentHTML('afterbegin', '<p class="alert alert-info text-center">Survol</p>')
    } else { // paragraphe existe dans le header donc on ne fait rien
        console.info('existe déjà', isParagraphExist)
    }
})

img.addEventListener('mouseleave', function() {
    // suppression du paragraphe, c'est un peu violent au niveau de l'interface mais ça marche
    document.querySelector('header p').remove()
})