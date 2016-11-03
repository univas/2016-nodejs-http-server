"use strict"

const shellCommand = require("child_process").exec

function page1(response) {
    console.log('Request handler "Page 1" was called')

    shellCommand("ls -lah", function onReturn(error, stdout, stderr) {
        response.statusCode = 200
        response.setHeader("Content-Type", "text/plain")
        response.write(stdout)
        response.end()
    })
}

function page2(response) {
    console.log('Request handler "Page 2" was called')
    response.write("Page 2")
    response.end()
}

//Public API
module.exports = {
    'page1': page1,
    'page2': page2
}