"use strict"

function route(path, handler) {
    if (typeof handler[path] === 'function') {
        console.log("Route to " + path)
        handler[path]()
    }
    else {
        console.log("No request handler found for " + path)
    }
}

//Public API
exports.route = route