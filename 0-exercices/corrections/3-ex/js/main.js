window.addEventListener('load', () => {
  const items = document.querySelectorAll('input, select')
  items.forEach(item => {
    item.addEventListener('change', (e) => {
      let value = e.target.value
      const parts = item.id.split('-')
      const el = parts[0]
      let prop = parts[1]
      if (parts.length === 3) {
        prop = `${parts[1]}-${parts[2]}`
      }
      // regex au lieu de typeof parce que un hexadecimal pour les couleurs est de type number
      if (/^[0-9]+$/.test(value)) {
        value += 'px'
      }
      document.querySelector(el).setAttribute('style', `${prop}: ${value}`)
    })
  })
  document.querySelector('textarea').addEventListener('keyup', (e) => {
    document.querySelector('article').innerHTML = e.target.value
  })

  document.querySelector('input[type=url]').addEventListener('blur', (e) => {
    document.querySelector('img').src = e.target.value
  })

  document.querySelector('img').addEventListener('mouseenter', imgEnter)

  function imgEnter() {
    this.style.cursor = 'pointer'
    const header = document.querySelector('header')
    let msgEl = header.querySelector('header p')
    if (msgEl === null) {
      msgEl = document.createElement('p')
      header.append(msgEl)
    }
    msgEl.style.opacity = 1
    msgEl.classList.add('alert', 'alert-info', 'text-center')
    msgEl.innerHTML = 'Survol de l\'image'
  }

  document.querySelector('img').addEventListener('mouseleave', imgLeave)

  function imgLeave() {
    const p = document.querySelector('header p')
    p.style.transition = 'opacity 3s'
    p.style.opacity = 0
  }
})
