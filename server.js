"use strict"

const http = require('http')
const host = 'localhost'
const port = 9000

function start() {
    http
        .createServer(onRequest)
        .listen(port, onStart)
}

function onRequest(request, response) {
    console.log('Request for: ' + request.url)
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end('Hello World!')
}

function onStart() {
    console.log(`Server started at http://${host}:${port}`)
}

//Public API
exports.start = start