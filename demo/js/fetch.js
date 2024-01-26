/**
 * Météo
 *  https://api.open-meteo.com/v1/forecast?latitude=VAL&longitude=VAL&current_weather=true
 */

/**
 * Pour faire un fetch, on a besoin Obligatoirement d'une URL
 * Les options d'en-tête (headers) sont facultatives et c'est un objet à passer en 2ème argument
 * Si le serveur distant nous répond favorable
 *  Alors on peut récupérer le résultat avec la méthode .then()
 * Si le serveur distant nous répond défavorable pour X raisons
 *  Alors on peut récupérer l'erreur avec la méthode .catch et faire un autre traitement
 * Lorsqu'on utilise fetch on a 2 fonctions qui permettent de transformer le résultat
 *  La méthode .json() transforme la réponse JSON en objet JS qu'on peut manipuler
 *      Attention si vous utilisez .json() sur une réponse qui n'est pas au format JSON, il y aura une erreur qui sera déclenché et qui sera capturer dans le catch
 *  La méthode .text() transforme la réponse en texte
 */
fetch('https://api.open-meteo.com/v1/forecast?latitude=48.896676&longitude=2.229307&current_weather=true')
// OK et transformation de la réponse en JSON
.then(response => response.json())
.then(t => { // t est un objet JS qu'on peut manipuler
    const header = document.createElement('header')
    header.innerText = `Temperature de la Défense : ${t.current_weather.temperature} ${t.current_weather_units.temperature}` 
    document.body.append(header)
})
// KO : cas d'erreur
.catch(error => console.error('erreur météo', error))

/**
 * Template HTML
 */

// fetch('http://127.0.0.1:7000/https://m2iformation.fr')
// .then(res => res.text())
// .then(res => console.log('m2i', res))
// .catch(error => console.error('erreur m2i html', error))

/**
 * TODOLIST à partir d'une API
 *  https://jsonplaceholder.typicode.com/todos
 * 
 */
fetch('https://jsonplaceholder.typicode.com/todos')
.then(data => data.json())
.then(todos => {
    // Affiche et recupère que les 10 premières
    for(let i = 0; i < 9; i++) {
        const todo = todos[i]
        const isCompleted = todo.completed ? 'checked':''
        const input = `
            <div>
                <input type="checkbox" id="scales" name="scales" ${isCompleted} />
                <label for="scales">${todo.title}</label>
            </div>
            `
        document.body.insertAdjacentHTML('afterbegin', input)
    }
})
.catch(error => console.error('erreur m2i html', error))
/**
 * Article news
 *  https://www.mac4ever.com/flux/json/content/all
 */