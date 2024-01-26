function fetchUsers() {
    return fetch('https://api.github.com/users')
    .then(res => res.json())
}

function showUsers(users) {
    const div = document.querySelector('.row')
    users.forEach(user => {
        const card = `
        <div class="card col-3">
        <img src="${user.avatar_url}" class="card-img-top" alt="user avatar" />
        <div class="card-body">
        <h5 class="card-title">${user.login}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Identifiant : ${user.id}</li>
                <li class="list-group-item">Type : ${user.type}</li>
                <li class="list-group-item">Administrateur GitHub : ${user.site_admin === true ?'Oui':'Non'}</li>
            </ul>
            <div class="card-body">
            <a href="${user.url}" class="card-link" target="_blank">GitHub</a>
                <a href="${user.repos_url}" class="card-link" target="_blank">Dépôts</a>
            </div>
        </div>
        `
        div.insertAdjacentHTML('afterbegin', card)
    })
}

window.addEventListener('load', () => {
    console.log('this avant button', this)
    document.querySelector('button').addEventListener('click', function () {
        const loader = `<div class="loader"></div>`
        this.insertAdjacentHTML('afterend', loader)
        fetchUsers()
        .then(data => {
            setTimeout(() => { // pour voir le loader mais à supprimer pour une mise en prod pck ralentissement
                showUsers(data)
                console.log('this après', this)
                this.remove()
                document.querySelector('.loader').remove()
            }, 3000)

        })
        .catch(error => console.error(error))
    })
})