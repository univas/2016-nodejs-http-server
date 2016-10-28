"use strict"

const server = require("./server.js")
const router = require("./router.js")
const requestHandlers = require("./requestHandlers.js")

let handler = {}
handler['/page1'] = requestHandlers.page1
handler['/page2'] = requestHandlers.page2

server.start(router.route, handler)