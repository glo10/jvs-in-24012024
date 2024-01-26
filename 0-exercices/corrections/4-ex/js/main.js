window.addEventListener('resize', () => {
    const row = document.querySelector('.row')
    if(window.matchMedia("(max-width: 576px)").matches) {
        if(!row.classList.contains('row-reverse')) {
            row.classList.add('row-reverse')
            const divParent = document.createElement('div')
            const options = document.querySelectorAll('select#h2-text-align option')
            options.forEach(option => {
                const value = option.value
                const text = option.text
                const div = document.createElement('div')
                const input = document.createElement('input')
                const label = document.createElement('label')
                div.classList.add('form-check')
                label.for = value
                label.classList.add('form-check-label')
                label.innerText = text
                input.classList.add('form-check-input')
                input.type = 'radio'
                input.value = value
                input.name = 'align-title'
                div.append(input)
                div.append(label)
                divParent.append(div)
            })
            document.querySelector('select').replaceWith(divParent)
        }
    } else {
        row.classList.remove('row-reverse')
        const select = document.createElement('select')
        select.id = 'h2-text-align'
        select.classList.add('form-select', 'w-25', 'text-center')

        const labels = document.querySelectorAll('.form-check-label')
        labels.forEach(label => {
            const option = document.createElement('option')
            option.value = label.for
            option.innerText = label.innerText
            select.appendChild(option)
        })
        const radio = document.querySelector('.form-check')
        if(radio !== null) {
            radio.parentElement.replaceWith(select)
        }
    }
})