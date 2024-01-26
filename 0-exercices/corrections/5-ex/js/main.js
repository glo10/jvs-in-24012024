fetch('https://api.github.com/users')
.then(res => res.json())
.then(users => showUsers(users))

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