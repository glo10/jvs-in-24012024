// TODO 3. Remplacer l'input type number par type range

/**
 * événement resize se déclenche à chaque fois qu'on redimentionne la fenêtre
 * donc la fonction callback ici fonction anonyme (sans nom) s'exécute à chaque fois
 * que la fenêtre est redimentionnée
 */
window.addEventListener('resize', () => {

    // console.log('match', window.matchMedia("(max-width: 576px)"))
    
    // 1. Modifier le layout (mise en page de la page)
    /**
     * Si ça matche donc propriété matches = true alors on est en dessous de 576 px de large
     * Donc notre exemple c'est le format mobile donc on peut faire nos modifs
     */
    if(window.matchMedia("(max-width: 576px)").matches) {
        // 2. Remplacer un select par des boutons radios
        const select = document.getElementById('h2-text-align')
        // Vérifier que le select existe avant de faire nos modifs
        if(select !== null) {
            const options = select.querySelectorAll('option')
            // 2.1 Créer des boutons radios à partir des options du select
            /**
             * idem que faire une boucle for(let i=0; i < options.length; i++)
             * ici option avec foreach serait égale à const option = options[i]
             * options = tableaux
             * option = l'élément en cours parcourue par la boucle
             * option on peut l'appeler comme on veut
            */
           const divParent = document.createElement('div')
           const p = `<p>Choisissez l'alignement du titre</p>`
           divParent.insertAdjacentHTML('afterbegin', p)
           divParent.id = 'block-radios'
           options.forEach(option => { 
               console.log('option', option)
               // création de l'input et ajout des informations de ses attributs (type, name et value)
               const input = document.createElement('input')
               input.type = 'radio'
               input.name = 'title-align'
               input.value = option.value
               // Création du label avec son attribut for et le contenu entre les balises label
               const label = document.createElement('label')
               label.for = option.value
               label.innerText = option.label
               // création du div
               const span = document.createElement('span')
               span.classList.add('d-block')
               span.appendChild(input)
               span.appendChild(label)
               // Ajout dans la div parent (la div qui contient tous mes div qui contiennent le label et l'input)
               divParent.append(span)
            })
            // Remplacer les éléments dans le DOM (document HTML) à la place du select
            select.parentElement.replaceWith(divParent)
        }
    } else {
        const divParentOptions = document.querySelector('#block-radios')
        const selectHTML = `
        <div class="form-group row">
        <label for="h2-text-align" class="form-label col-6">Alignement du titre</label>
        <select id="h2-text-align" class="form-select w-25">
          <option value="left">Gauche</option>
          <option value="center">Centré</option>
          <option value="right">Droite</option>
          <option value="justify">Justifié</option>
        </select>
      </div>
        `
        divParentOptions.remove()
        document.body.insertAdjacentHTML('beforeend', selectHTML)
    }
})