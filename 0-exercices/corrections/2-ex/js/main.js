window.addEventListener('load', () => {
  const inputs = document.querySelectorAll('input:not([data-show-id="technos"])')
  inputs.forEach(input => {
    input.addEventListener('input', function (e) {
      const el = document.getElementById(e.target.dataset.showId)
      el.firstElementChild.innerHTML = e.target.value
    })
  })

  document.querySelector('.btn.btn-success').addEventListener('click', (e) => {
    e.preventDefault()
    const techno = document.querySelector('[data-show-id="technos"]')
    const technosBlock = document.querySelector('#technos')
    let ul = technosBlock.querySelector('ul')
    if (ul === null) {
      ul = document.createElement('ul')
      ul.classList.add('list-group')
      technosBlock.append(ul)
    }
    const li = document.createElement('li')
    li.classList.add('list-group-item')
    li.innerHTML = techno.value
    ul.appendChild(li)
    techno.value = ''
  })
})
