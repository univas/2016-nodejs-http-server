"use strict"

function route(pathname, handler) {
    if (typeof handler[pathname] === "function") {
        console.log("Route to " + pathname)
        return handler[pathname]()
    }
    else {
        console.log("No request handler found for " + pathname)
        return "404 Not found"
    }
}

//Public API
exports.route = route