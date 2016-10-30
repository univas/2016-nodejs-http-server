"use strict"

const http = require("http")
const url = require("url")
const hostname = "localhost"
const port = 9000

function start(route, handler) {
    http
        .createServer(onRequest)
        .listen(port, onStart)
    
    function onRequest(request, response) {
        console.log("Request for: " + request.url)
        
        let pathname = url.parse(request.url).pathname
        route(pathname, handler)
        
        response.statusCode = 200
        response.setHeader("Content-Type", "text/plain")
        response.write("Hello World!")
        response.end()
    }
}

function onStart() {
    console.log(`Server started at http://${hostname}:${port}`)
}

//Public API
exports.start = start