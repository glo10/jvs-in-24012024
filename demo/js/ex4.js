/**
 * événement resize se déclenche à chaque fois qu'on redimensionne la fenêtre
 * donc la fonction callback ici fonction anonyme (sans nom) s'exécute à chaque fois
 * que la fenêtre est redimentionnée d'un pixel
 * 
 * CONTRAT : odifier le layout (mise en page de la page) entre le desktop (ordinateur) et le mobile
 *  en remplaçant le select par les boutons radios
 */
window.addEventListener('resize', () => {
    // console.log('match', window.matchMedia("(max-width: 576px)")) retourne un objet qui a une propriété matches (booléen true ou false)
    /**
     * Si ça matche donc propriété matches = true
     *  alors on est en dessous de 576 px de large
     *  Dand notre exemple c'est le format mobile
     *  Donc on change le select par les radios
     */
    if(window.matchMedia("(max-width: 576px)").matches) { // contexte mobile
        // 2. Remplacer un select par des boutons radios
        const select = document.getElementById('h2-text-align')
        // Vérifier que le select existe avant de faire nos modifs
        if(select !== null) {
            const options = select.querySelectorAll('option')
            /**
             * Créer des boutons radios à partir des options du select
             * Un bouton radio possède
             *  1 label
             *  1 input
             *  1 élément parent (wrapper) qui contient le label et l'input
             */

            // divParent élément div qui va contenir tous nos boutons radios
           const divParent = document.createElement('div')
           const p = `<p>Choisissez l'alignement du titre</p>`
           divParent.insertAdjacentHTML('afterbegin', p)
           divParent.id = 'block-radios'
            /**
             * un tableau.forEach = idem que faire une boucle for(let i=0; i < options.length; i++)
             *  ici option avec foreach serait égale à const option = options[i]
             *  options = tableaux
             *  option = l'élément en cours parcourue par la boucle
             *  option on peut l'appeler comme on veut
            */
           options.forEach(option => { 
               /**
                * création de l'input
                * et ajout des informations de ses attributs (type, name et value)
                */
               const input = document.createElement('input')
               input.type = 'radio'
               input.name = 'title-align'
               input.value = option.value
               // Création du label avec son attribut for et le contenu textuelle entre les balises label
               const label = document.createElement('label')
               label.for = option.value
               label.innerText = option.label
               // création du span englobant l'input et le label
               const span = document.createElement('span')
               span.classList.add('d-block')
               // Ajout dans la span de l'input et label
               span.appendChild(input)
               span.appendChild(label)
               // ajout du radio dans la div
               divParent.append(span)
            })
            // Remplacer les éléments nouvellement crées dans le DOM (document HTML) à la place du parent du select (donc une div cf. structure HTML)
            select.parentElement.replaceWith(divParent)
        }
    } else { // contexte desktop
        // créée préc. si l'utilisateur a redimensionné en dessous de 576px
        const btnsRadio = document.querySelector('#block-radios')
        if(btnsRadio !== null) { 
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
            // suppression de l'élément du DOM
            btnsRadio.remove()
            // Ajout dans le DOM du select
            document.querySelector('main').insertAdjacentHTML('afterbegin', selectHTML)
        }
    }
})