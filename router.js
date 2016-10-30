"use strict"

function route(pathname, handler) {
    if (typeof handler[pathname] === "function") {
        console.log("Route to " + pathname)
        handler[pathname]()
    }
    else {
        console.log("No request handler found for " + pathname)
    }
}

//Public API
exports.route = route