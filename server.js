"use strict"

const http = require('http')
const url = require('url')
const hostname = 'localhost'
const port = 9000

function start(route) {
    http
        .createServer(onRequest)
        .listen(port, onStart)
    
    function onRequest(request, response) {
        console.log('Request for: ' + request.url)
        
        let path = url.parse(request.url).path
        route(path)
        
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/plain')
        response.end('Hello World!')
    }
}


function onStart() {
    console.log(`Server started at http://${hostname}:${port}`)
}

//Public API
exports.start = start