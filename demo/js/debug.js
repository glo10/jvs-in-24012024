const age = parseInt(prompt('votre age'))
let msg = ''
console.log('point d\'arrêt')
console.log(`Vous avez ${age} ans`)

if(age < 18) {
    msg = 'Mineur'
} else {
    msg = 'Majeur'
}

console.info(msg)
/**
 * CODE du launch.json pour mettre en place le debogage avec JS
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Demo Debug",
            "url": "http://localhost:5500/demo",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
*/