import webServer from './webServer'

let Server = new webServer();
Server.start()
    .then(() => {
        console.log('Web server started!')
    })
    .catch(err => {
        console.error(err)
        console.error('Failed to start web server')
    });