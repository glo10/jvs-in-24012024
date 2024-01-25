const h1 = document.querySelector('h1')
console.log('h1', h1)
const h2 = document.querySelector('h2')
console.log('h2', h2)
const items = document.querySelectorAll('li')
console.dir('li', items)
// séléctionner ul
const ul = document.querySelector('ul')
// créer un li avec la valeur textuelle 10
const item10 = document.createElement('li')
item10.innerText = 'nouvelle créé avec JS 10'
// Ajouter ce li à ul
ul.append(item10)