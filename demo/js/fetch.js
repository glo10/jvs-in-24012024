/**
 * Météo
 *  https://api.open-meteo.com/v1/forecast?latitude=VAL&longitude=VAL&current_weather=true
 */

fetch('https://api.open-meteo.com/v1/forecast?latitude=48.896676&longitude=2.229307&current_weather=true')
// OK
.then(response => response.json())
.then(t => {
    const header = document.createElement('header')
    header.innerText = `Temperature de la Défense : ${t.current_weather.temperature} ${t.current_weather_units.temperature}` 
    document.body.append(header)
})
// KO
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