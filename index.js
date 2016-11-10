"use strict"

const server = require("./server.js")
const router = require("./router.js")
const requestHandlers = require("./requestHandlers.js")

let handler = {}
handler["/"] = requestHandlers.login
handler["/login"] = requestHandlers.login
handler["/auth"] = requestHandlers.auth

server.start(router.route, handler)