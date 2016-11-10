"use strict"

const fs = require('fs')

function login(response) {
    console.log('Request handler "Login" was called')

    fs.readFile("./index.html", "utf-8", function onReturn(error, data) {
        if(error) throw error
        response.statusCode = 200
        response.setHeader("Content-Type", "text/html")
        response.write(data)
        response.end()
    })
}

function auth(response, postData) {
    console.log('Request handler "Auth" was called')
    response.write("You have sent: " + postData)
    response.end()
}

//Public API
module.exports = {
    'login': login,
    'auth': auth
}